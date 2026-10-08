import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Добавляет векторные рамки к неизменённым JPEG и явно разделяет пропущенные участки.
 * Координаты и размеры задаются в сценарии конкретной проверенной серии снимков.
 */
export async function renderDocsScreenshots(directory, frames) {
  const outputDirectory = path.join(directory, 'annotated');
  await mkdir(outputDirectory, { recursive: true });

  for (const frame of frames) {
    const width = frame.parts[0][1];
    const gap = 44;
    const height = frame.parts.reduce((sum, part) => sum + part[2], 0) + gap * (frame.parts.length - 1);
    const elements = [`<rect width="${width}" height="${height}" fill="white"/>`];
    let offset = 0;

    for (const [index, [source, partWidth, partHeight]] of frame.parts.entries()) {
      if (partWidth !== width) {
        throw new Error(`Несогласованная ширина фрагмента: ${source}`);
      }

      if (index > 0) {
        elements.push(`<rect y="${offset}" width="${width}" height="${gap}" fill="#f1f3f5"/>`);
        elements.push(`<path d="M 0 ${offset + 1} H ${width} M 0 ${offset + gap - 1} H ${width}" stroke="#a4a9b0" stroke-dasharray="6 5"/>`);
        elements.push(`<text x="${width / 2}" y="${offset + 27}" text-anchor="middle" font-family="sans-serif" font-size="${width < 500 ? 12 : 15}" fill="#59616b">Часть экрана пропущена</text>`);
        offset += gap;
      }

      const data = (await readFile(path.join(directory, source))).toString('base64');
      elements.push(`<image x="0" y="${offset}" width="${partWidth}" height="${partHeight}" href="data:image/jpeg;base64,${data}"/>`);
      offset += partHeight;
    }

    const stroke = Math.max(3, width / 256);
    const radius = width < 500 ? 12 : 17;

    for (const mark of frame.marks) {
      if (mark.x < 0 || mark.y < 0 || mark.x + mark.width > width || mark.y + mark.height > height) {
        throw new Error(`Рамка за пределами кадра: ${frame.name}`);
      }

      for (const [color, lineWidth] of [['white', stroke + 3], ['#d92d20', stroke]]) {
        elements.push(`<rect x="${mark.x}" y="${mark.y}" width="${mark.width}" height="${mark.height}" rx="5" fill="none" stroke="${color}" stroke-width="${lineWidth}"/>`);
      }

      if (mark.number) {
        elements.push(`<circle cx="${mark.labelX}" cy="${mark.labelY}" r="${radius}" fill="#d92d20" stroke="white" stroke-width="2"/>`);
        elements.push(`<text x="${mark.labelX}" y="${mark.labelY}" dy=".35em" text-anchor="middle" font-family="sans-serif" font-size="${radius + 2}" font-weight="700" fill="white">${mark.number}</text>`);
      }
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n${elements.join('\n')}\n</svg>\n`;
    await writeFile(path.join(outputDirectory, `${frame.name}.svg`), svg);
  }

  console.log(`Подготовлено иллюстраций: ${frames.length}. Исходные JPEG не изменены.`);
}


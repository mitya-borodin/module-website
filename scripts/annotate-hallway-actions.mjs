import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { renderDocsScreenshots } from './render-docs-screenshots.mjs';

/**
 * Один кадр отмечает одно действие в живом GUI. Manifest хранит проверенные
 * фрагменты исходных снимков и рамки; содержимое интерфейса не дорисовывается.
 */
const directory = fileURLToPath(new URL('../src/assets/docs/solutions/hallway-lighting/gui/actions/', import.meta.url));
const frames = JSON.parse(await readFile(new URL('./hallway-action-frames.json', import.meta.url), 'utf8'));
await renderDocsScreenshots(directory, frames);

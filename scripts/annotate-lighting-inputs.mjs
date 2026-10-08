import { fileURLToPath } from 'node:url';
import { renderDocsScreenshots } from './render-docs-screenshots.mjs';

/**
 * Поясняет выбор входов на реальных снимках от 1 октября 2026 года.
 * Карточки показаны до выбора: привязки и успешное сохранение не имитируются.
 */
const directory = fileURLToPath(new URL('../src/assets/docs/lighting/inputs/', import.meta.url));

const frames = [
  {
    name: '01-light-input-desktop',
    parts: [['inputs-header-desktop.jpg', 780, 85], ['01-light-input-body-desktop.jpg', 780, 258]],
    marks: [{ x: 19, y: 284, width: 174, height: 46 }],
  },
  {
    name: '01-light-input-mobile',
    parts: [['inputs-header-mobile.jpg', 390, 100], ['01-light-input-body-mobile.jpg', 390, 348]],
    marks: [{ x: 25, y: 264, width: 169, height: 42 }],
  },
  {
    name: '02-light-device-desktop',
    parts: [['02-light-device-top-desktop.jpg', 1200, 248], ['02-light-device-body-desktop.jpg', 1200, 426]],
    marks: [
      { x: 4, y: 88, width: 1192, height: 49, number: 1, labelX: 1150, labelY: 88 },
      { x: 416, y: 210, width: 230, height: 34, number: 2, labelX: 672, labelY: 226 },
    ],
  },
  {
    name: '02-light-device-mobile',
    parts: [['02-light-device-top-mobile.jpg', 390, 228], ['02-light-device-body-mobile.jpg', 390, 300]],
    marks: [
      { x: 13, y: 99, width: 364, height: 50, number: 1, labelX: 355, labelY: 99 },
      { x: 23, y: 199, width: 215, height: 27, number: 2, labelX: 260, labelY: 212 },
    ],
  },
  {
    name: '03-light-control-desktop',
    parts: [['03-light-control-top-desktop.jpg', 780, 86], ['03-light-control-body-desktop.jpg', 780, 310]],
    marks: [{ x: 16, y: 198, width: 215, height: 37 }],
  },
  {
    name: '03-light-control-mobile',
    parts: [['03-light-control-top-mobile.jpg', 390, 100], ['03-light-control-body-mobile.jpg', 390, 440]],
    marks: [{ x: 23, y: 193, width: 207, height: 32 }],
  },
  {
    name: '04-motion-input-desktop',
    parts: [['inputs-header-desktop.jpg', 780, 85], ['04-motion-input-body-desktop.jpg', 780, 240]],
    marks: [{ x: 407, y: 304, width: 174, height: 46 }],
  },
  {
    name: '04-motion-input-mobile',
    parts: [['inputs-header-mobile.jpg', 390, 100], ['04-motion-input-body-mobile.jpg', 390, 336]],
    marks: [{ x: 25, y: 431, width: 169, height: 44 }],
  },
  {
    name: '05-motion-device-desktop',
    parts: [['05-motion-device-top-desktop.jpg', 976, 248], ['05-motion-device-body-desktop.jpg', 976, 450]],
    marks: [
      { x: 4, y: 88, width: 968, height: 49, number: 1, labelX: 930, labelY: 88 },
      { x: 305, y: 210, width: 265, height: 34, number: 2, labelX: 595, labelY: 226 },
    ],
  },
  {
    name: '05-motion-device-mobile',
    parts: [['05-motion-device-top-mobile.jpg', 390, 228], ['05-motion-device-body-mobile.jpg', 390, 336]],
    marks: [
      { x: 13, y: 99, width: 364, height: 50, number: 1, labelX: 355, labelY: 99 },
      { x: 23, y: 199, width: 247, height: 27, number: 2, labelX: 292, labelY: 212 },
    ],
  },
  {
    name: '06-motion-control-desktop',
    parts: [['06-motion-control-top-desktop.jpg', 780, 86], ['06-motion-control-body-desktop.jpg', 780, 360]],
    marks: [{ x: 406, y: 198, width: 285, height: 37 }],
  },
  {
    name: '06-motion-control-mobile',
    parts: [['06-motion-control-top-mobile.jpg', 390, 100], ['06-motion-control-body-mobile.jpg', 390, 440]],
    marks: [{ x: 23, y: 391, width: 254, height: 35 }],
  },
];

await renderDocsScreenshots(directory, frames);

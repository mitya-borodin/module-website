import { fileURLToPath } from 'node:url';
import { renderDocsScreenshots } from './render-docs-screenshots.mjs';

/**
 * Собирает векторные пояснения к реальным снимкам подготовки освещения.
 * JPEG остаются неизменными. Пропущенный участок между фрагментами явно обозначен.
 * Координаты относятся только к проверенному набору снимков от 1 октября 2026 года.
 */
const directory = fileURLToPath(new URL('../src/assets/docs/lighting/preparation/', import.meta.url));

const searchParts = [
  ['context/01-device-search-desktop.jpg', 1280, 181],
  ['context/01-device-search-lower-desktop.jpg', 1280, 235],
];
const deviceParts = [
  ['context/02-device-header-desktop.jpg', 920, 55],
  ['context/02-device-body-desktop.jpg', 920, 430],
];
const controlParts = [
  ['context/05-control-header-desktop.jpg', 920, 92],
  ['context/05-control-body-desktop.jpg', 920, 435],
];
const sensorParts = [
  ['context/07-sensor-header-desktop.jpg', 920, 92],
  ['context/07-sensor-body-desktop.jpg', 920, 435],
];
const nameMobileMarks = [
  { x: 12, y: 98, width: 366, height: 52, number: 1, labelX: 358, labelY: 98 },
  { x: 12, y: 788, width: 366, height: 44, number: 2, labelX: 358, labelY: 788 },
];

const frames = [
  {
    name: '01-devices-menu-desktop', parts: searchParts,
    marks: [{ x: 4, y: 92, width: 290, height: 56 }],
  },
  {
    name: '01-devices-menu-mobile', parts: [['01-devices-menu-mobile.jpg', 390, 225]],
    marks: [{ x: 5, y: 73, width: 380, height: 52 }],
  },
  {
    name: '01-device-search-desktop', parts: searchParts,
    marks: [
      { x: 312, y: 12, width: 956, height: 52, number: 1, labelX: 1190, labelY: 18 },
      { x: 608, y: 140, width: 220, height: 36, number: 2, labelX: 853, labelY: 157 },
    ],
  },
  {
    name: '01-device-search-mobile', parts: [['01-device-search-mobile.jpg', 390, 844]],
    marks: [
      { x: 12, y: 36, width: 366, height: 52, number: 1, labelX: 358, labelY: 36 },
      { x: 12, y: 788, width: 366, height: 44, number: 2, labelX: 358, labelY: 788 },
    ],
  },
  {
    name: '02-device-name-desktop', parts: deviceParts,
    marks: [{ x: 6, y: 126, width: 908, height: 53, number: 1, labelX: 888, labelY: 126 }],
  },
  { name: '02-device-name-mobile', parts: [['02-device-name-mobile.jpg', 390, 844]], marks: nameMobileMarks },
  {
    name: '03-light-controls-desktop', parts: [['03-light-controls-desktop.jpg', 920, 255]],
    marks: [{ x: 16, y: 100, width: 190, height: 34 }],
  },
  {
    name: '03-light-controls-mobile', parts: [['03-light-controls-mobile.jpg', 390, 344]],
    marks: [{ x: 22, y: 96, width: 198, height: 31 }],
  },
  {
    name: '04-control-path-desktop', parts: controlParts,
    marks: [{ x: 6, y: 56, width: 148, height: 32 }],
  },
  {
    name: '04-control-path-mobile',
    parts: [['context/04-control-header-mobile.jpg', 390, 103], ['context/04-control-body-mobile.jpg', 390, 433]],
    marks: [{ x: 12, y: 64, width: 151, height: 34 }],
  },
  {
    name: '05-control-name-desktop', parts: controlParts,
    marks: [{ x: 6, y: 162, width: 908, height: 53, number: 1, labelX: 888, labelY: 162 }],
  },
  { name: '05-control-name-mobile', parts: [['05-control-name-mobile.jpg', 390, 844]], marks: nameMobileMarks },
  {
    name: '06-sensor-controls-desktop', parts: [['06-sensor-controls-desktop.jpg', 920, 565]],
    marks: [{ x: 16, y: 391, width: 254, height: 36 }],
  },
  {
    name: '06-sensor-controls-mobile', parts: [['06-sensor-controls-mobile.jpg', 390, 390]],
    marks: [{ x: 22, y: 141, width: 254, height: 32 }],
  },
  {
    name: '07-sensor-name-desktop', parts: sensorParts,
    marks: [{ x: 6, y: 162, width: 908, height: 53, number: 1, labelX: 888, labelY: 162 }],
  },
  { name: '07-sensor-name-mobile', parts: [['07-sensor-name-mobile.jpg', 390, 844]], marks: nameMobileMarks },
];

await renderDocsScreenshots(directory, frames);

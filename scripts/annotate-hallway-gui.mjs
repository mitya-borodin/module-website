import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { renderDocsScreenshots } from './render-docs-screenshots.mjs';

/**
 * Рамки привязаны к реальным кадрам Chrome от 10.10.2026 и охватывают карточки целиком.
 * Мобильные имя и задержка показывают место открытия ввода. Пиксели GUI не ретушируются.
 */
const directory = fileURLToPath(new URL('../src/assets/docs/solutions/hallway-lighting/gui/', import.meta.url));
const marks = {
  '01-showcase': {
    desktop: [[680,94,380,174]], tablet: [[322,187,380,130]], mobile: [[14,150,362,108]],
  },
  '02-name': {
    desktop: [[20,201,760,44],[20,553,760,44]], mobile: [[14,190,362,77]],
  },
  '03-relay': {
    desktop: [[18,320,374,253],[33,807,238,40]],
    tablet: [[18,320,378,253],[33,807,238,40]],
    mobile: [[14,310,362,197],[24,781,110,37]],
  },
  '04-motion': {
    desktop: [[408,320,374,301],[33,807,238,40]],
    tablet: [[404,320,378,301],[33,807,238,40]],
    mobile: [[14,489,362,197],[24,781,110,37]],
  },
  '05-buttons': {
    desktop: [[18,92,376,218]], mobile: [[14,100,362,164]],
  },
  '06-delay': {
    desktop: [[406,256,376,136],[18,404,376,136],[33,823,238,39]],
    mobile: [[14,508,362,136],[14,656,362,136]],
  },
  '07-threshold': {
    desktop: [[18,118,376,174],[406,118,376,158]],
    mobile: [[14,140,362,174],[14,328,362,156]],
  },
  '08-period': {
    desktop: [[18,118,376,136],[406,118,376,136],[18,266,376,136]],
    mobile: [[14,144,362,136],[14,292,362,136],[14,440,362,136]],
  },
  '09-blocks': {
    desktop: [[18,118,376,136],[406,118,376,136],[33,807,238,40]],
    mobile: [[14,140,362,136],[14,288,362,136],[25,781,108,38]],
  },
};
const frames = [];
for (const [step, views] of Object.entries(marks)) {
  for (const view of ['mobile','tablet','desktop']) {
    const source = `${step}-${view}.jpg`;
    const {width,height} = await sharp(path.join(directory,source)).metadata();
    frames.push({name:`${step}-${view}`,parts:[[source,width,height]],marks:(views[view] ?? views.desktop).map(([x,y,width,height])=>({x,y,width,height}))});
  }
}
for (const view of ['mobile','tablet','desktop']) {
  const width = view === 'mobile' ? 390 : 800;
  const topHeight = view === 'mobile' ? 628 : 600;
  const bottomHeight = view === 'mobile' ? 52 : 61;
  frames.push({name:`10-create-${view}`, parts:[[`10-create-${view}-top.jpg`,width,topHeight],[`10-create-${view}-bottom.jpg`,width,bottomHeight]], marks: view === 'mobile'
    ? [{x:16,y:573,width:358,height:44},{x:198,y:topHeight+44+8,width:176,height:36}]
    : [{x:20,y:553,width:760,height:44},{x:406,y:topHeight+44+10,width:374,height:40}]});
}
await renderDocsScreenshots(directory,frames);

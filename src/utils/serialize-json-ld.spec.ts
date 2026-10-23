import assert from 'node:assert/strict';
import { test } from 'node:test';
import { serializeJsonLd } from './serialize-json-ld.ts';

/** Проверяет сохранность русских текстов, кавычек и вложенных структур. */
test('JSON-LD сохраняет исходные значения', () => {
  const data = { headline: 'Свет «Прихожая»', description: 'Строка "с кавычками"', image: { width: 1200 } };

  const serialized = serializeJsonLd(data);

  assert.deepEqual(JSON.parse(serialized), data);
});

/** Проверяет, что текст не может завершить script или открыть HTML-комментарий. */
test('JSON-LD экранирует границы HTML без изменения данных', () => {
  const data = { description: '</script><script>alert(1)</script><!--', headline: '</ScRiPt>' };

  const serialized = serializeJsonLd(data);

  assert.equal(serialized.includes('<'), false);
  assert.deepEqual(JSON.parse(serialized), data);
});

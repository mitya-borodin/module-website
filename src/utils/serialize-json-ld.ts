/**
 * Сохраняет данные JSON и не даёт тексту страницы закрыть HTML-элемент script.
 */
export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}

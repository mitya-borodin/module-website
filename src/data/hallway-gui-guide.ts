import type { ImageMetadata } from 'astro';

type View = 'mobile' | 'tablet' | 'desktop';
interface ActionFrame {
  key: string;
  title: string;
  image: ImageMetadata;
}

const images = import.meta.glob<ImageMetadata>(
  '../assets/docs/solutions/hallway-lighting/gui/actions/annotated/*.svg',
  { eager: true, import: 'default' },
);

const titles: Record<string, string> = {
  'open-menu': 'Откройте меню.',
  'showcase-menu': 'Выберите «Витрина автоматизаций».',
  'showcase-search': 'Нажмите поле поиска.',
  'showcase-search-edit': 'Введите «Освещение».',
  'showcase-search-apply': 'Нажмите «Применить».',
  'showcase-card': 'Нажмите карточку «Освещение».',
  'name-entry': 'Нажмите поле «Имя».',
  'name-edit': 'Введите «Свет прихожей».',
  'name-confirm': 'Сохраните имя.',
  'state-check': 'Оставьте состояние «Выключена».',
  'open-inputs': 'В форме сценария прокрутите к разделам и откройте «Входы».',
  'relay-list': 'У «Дискретные выходы освещения» нажмите «+» или число выбранных каналов.',
  'relay-device': 'Найдите модуль реле K1 и откройте его карточку.',
  'relay-channel': 'Выберите первый выход — «Команда K1».',
  'relay-save': 'Нажмите «Сохранить» в панели «Черновик изменён».',
  'motion-list': 'У «Датчики движения» нажмите «+» или число выбранных каналов.',
  'motion-device': 'Найдите датчик S1 и откройте его карточку.',
  'motion-channel': 'Выберите «Текущее движение».',
  'motion-save': 'Сохраните выбранный канал.',
  'buttons-add': 'У «Переключатели освещения» нажмите «+».',
  'open-settings': 'В форме сценария прокрутите к разделам и откройте «Настройки».',
  'quiet-entry': 'Откройте «Ожидание полной тишины».',
  'quiet-edit': 'Введите 2 — это две минуты.',
  'quiet-confirm': 'Сохраните значение 2.',
  'noise-entry': 'Откройте «Ожидание без движения при шуме».',
  'noise-edit': 'Введите 0.',
  'noise-confirm': 'Сохраните значение 0.',
  'settings-save': 'Сохраните изменения раздела, если появилась панель «Черновик изменён».',
  'motion-back-settings': 'Нажмите «Настройки» в пути над группой.',
  'period-back-settings': 'Нажмите «Настройки» в пути над группой.',
  'sensor-group': 'Откройте группу «Сенсорная автоматика».',
  'motion-group': 'Откройте группу «Движение».',
  'aggregation-entry': 'Откройте «Агрегация движения».',
  'aggregation-choice': 'Выберите «Максимальное значение».',
  'aggregation-confirm': 'Сохраните способ агрегации.',
  'threshold-entry': 'Откройте «Порог движения».',
  'threshold-edit': 'Введите начальный порог 100.',
  'threshold-confirm': 'Сохраните порог.',
  'period-group': 'Откройте «Период автоматического включения».',
  'period-enabled': 'Проверьте: автоматическое включение — «Вкл».',
  'period-start': 'Откройте «Начало периода autoOn».',
  'period-start-mode': 'Выберите способ «По часу».',
  'period-start-edit': 'Укажите 00:00 для начала периода.',
  'period-start-confirm': 'Сохраните начало периода.',
  'period-end': 'Откройте «Конец периода autoOn».',
  'period-end-mode': 'Выберите способ «По часу».',
  'period-end-edit': 'Укажите 00:00 для конца периода.',
  'period-end-confirm': 'Сохраните конец периода.',
  'blocks-group': 'Откройте группу «Блокировки автоматики».',
  'block-on': 'Откройте «Блокировка автоматического включения».',
  'block-on-edit': 'Введите 5 — это пять минут.',
  'block-on-confirm': 'Сохраните блокировку включения.',
  'block-off': 'Откройте «Блокировка автоматического выключения».',
  'block-off-edit': 'Введите 5 — это пять минут.',
  'block-off-confirm': 'Сохраните блокировку выключения.',
  'blocks-save': 'Сохраните изменения блокировок.',
  'back-to-root': 'Нажмите «Свет прихожей» в пути над настройками.',
  'create': 'После проверки всех четырёх каналов нажмите «Создать автоматизацию».',
};

const frame = (key: string, view: View): ActionFrame => {
  const image = images[`../assets/docs/solutions/hallway-lighting/gui/actions/annotated/${key}-${view}.svg`];
  if (!image) {
    throw new Error(`Нет реального кадра ${key}-${view}`);
  }

  let title = titles[key];
  if (view === 'desktop') {
    const inlineTitles: Record<string, string> = {
      'showcase-search': 'Введите «Освещение» в поле поиска.',
      'name-entry': 'Введите «Свет прихожей» в поле «Имя».',
      'quiet-entry': 'В «Ожидание полной тишины» введите 2 min.',
      'noise-entry': 'В «Ожидание без движения при шуме» введите 0 min.',
      'threshold-entry': 'В поле «Порог движения» введите 100.',
      'block-on': 'В «Блокировка автоматического включения» введите 5 min.',
      'block-off': 'В «Блокировка автоматического выключения» введите 5 min.',
    };
    title = inlineTitles[key] ?? title;
  }

  return { key, title, image };
};

const sequence = (keys: string[], view: View) => {
  return keys.map((key) => frame(key, view));
};

const guides: Record<View, ActionFrame[]>[] = [];
for (const view of ['mobile', 'tablet', 'desktop'] as const) {
  const touch = view !== 'desktop';
  const steps = [
    [...(touch ? ['open-menu'] : []), 'showcase-menu', 'showcase-search', ...(touch ? ['showcase-search-edit', 'showcase-search-apply'] : []), 'showcase-card'],
    ['name-entry', ...(touch ? ['name-edit', 'name-confirm'] : []), 'state-check'],
    ['open-inputs', 'relay-list', 'relay-device', 'relay-channel', 'relay-save'],
    ['open-inputs', 'motion-list', 'motion-device', 'motion-channel', 'motion-save'],
    ['open-inputs', 'buttons-add'],
    ['open-settings', 'quiet-entry', ...(touch ? ['quiet-edit', 'quiet-confirm'] : []), 'noise-entry', ...(touch ? ['noise-edit', 'noise-confirm'] : []), 'settings-save'],
    ['open-settings', 'sensor-group', 'motion-group', 'aggregation-entry', 'aggregation-choice', 'aggregation-confirm', 'threshold-entry', ...(touch ? ['threshold-edit', 'threshold-confirm'] : []), 'motion-back-settings', 'settings-save'],
    ['open-settings', 'period-group', 'period-enabled', 'period-start', 'period-start-mode', 'period-start-edit', 'period-start-confirm', 'period-end', 'period-end-mode', 'period-end-edit', 'period-end-confirm', 'period-back-settings', 'settings-save'],
    ['open-settings', 'blocks-group', 'block-on', ...(touch ? ['block-on-edit', 'block-on-confirm'] : []), 'block-off', ...(touch ? ['block-off-edit', 'block-off-confirm'] : []), 'blocks-save'],
    ['back-to-root', 'state-check', 'create'],
  ];
  steps.forEach((keys, index) => {
    guides[index] ??= { mobile: [], tablet: [], desktop: [] };
    guides[index][view] = sequence(keys, view);
  });
}

export default guides;

# Bagdat Kurentay — Digital Business Card

Премиальная одностраничная электронная визитная карточка (Link-in-Bio) для
Performance Marketer. React + Vite + TypeScript, без Tailwind и без сервера,
полностью готова к деплою на GitHub Pages.

## Стек

- React 18
- Vite 6
- TypeScript
- Обычный структурированный CSS (без Tailwind)
- lucide-react — иконки
- Intersection Observer API — анимации при прокрутке

## 1. Установка зависимостей

Убедитесь, что установлен Node.js версии 18 или новее, затем в корне проекта
выполните:

```bash
npm install
```

## 2. Запуск проекта локально

```bash
npm run dev
```

Vite выведет в терминал локальный адрес (обычно `http://localhost:5173`).
Откройте его в браузере — страница будет обновляться автоматически при
изменении файлов.

## 3. Как заменить фотографию

Главная фотография лежит по пути:

```
public/profile.jpg
```

Чтобы заменить её:

1. Подготовьте новое фото с соотношением сторон примерно **4:5**
   (вертикальное), лицо должно быть в верхней трети кадра.
2. Замените файл `public/profile.jpg` на новый, сохранив то же имя
   `profile.jpg` (либо измените путь в `src/components/ProfileHero.tsx`,
   в атрибуте `src` у тега `<img>`).
3. Сохраните изменения и перезапустите `npm run dev`, чтобы увидеть
   результат.

## 4. Как изменить ссылки (контакты и проекты)

Все ссылки, названия и подписи вынесены в единый файл:

```
src/data.ts
```

В нём три массива:

- `contacts` — Instagram, WhatsApp, Telegram;
- `projects` — Baipket, Casto Home, Baur.broo;
- `exMarketer` — 125online_kz.

Чтобы изменить текст или ссылку, отредактируйте соответствующие поля
`title`, `subtitle` и `href`. Чтобы добавить новую кнопку, скопируйте один
объект внутри массива и заполните новыми данными (иконку можно выбрать из
[lucide-react](https://lucide.dev/icons/)).

## 5. Как загрузить проект на GitHub

1. Создайте новый пустой репозиторий на GitHub (без README, чтобы не было
   конфликтов), например `bagdat-kurentay-card`.
2. В корне проекта выполните:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git push -u origin main
```

Замените `USERNAME` и `REPOSITORY-NAME` на свои значения.

## 6. Настройка адреса для GitHub Pages (обязательный шаг)

Откройте файл `vite.config.ts` и замените `"/repository-name/"` на реальное
имя вашего репозитория, например:

```ts
export default defineConfig({
  plugins: [react()],
  base: "/bagdat-kurentay-card/",
});
```

Без этого шага стили, скрипты и фотография не загрузятся на GitHub Pages.

## 7. Как включить GitHub Pages

1. Откройте репозиторий на GitHub → вкладка **Settings**.
2. В левом меню выберите **Pages**.
3. В разделе **Build and deployment** → **Source** выберите
   **GitHub Actions**.
4. Сохраните — при следующем push в ветку `main` сайт задеплоится
   автоматически (workflow уже настроен в
   `.github/workflows/deploy.yml`).

## 8. Автоматический деплой

Автоматический деплой уже настроен через GitHub Actions
(`.github/workflows/deploy.yml`). Каждый `push` в ветку `main`:

1. установит зависимости;
2. соберёт проект (`npm run build`);
3. опубликует содержимое папки `dist` на GitHub Pages.

Проверить статус деплоя можно во вкладке **Actions** репозитория. После
успешного завершения сайт будет доступен по адресу:

```
https://username.github.io/repository-name/
```

## 9. Ручной деплой (альтернативный способ)

Если вы не хотите использовать GitHub Actions, можно задеплоить вручную
через пакет `gh-pages` (уже добавлен в `devDependencies`):

```bash
npm run deploy
```

Эта команда соберёт проект и опубликует папку `dist` в ветку `gh-pages`.
После первого ручного деплоя в **Settings → Pages** выберите источник
**Deploy from a branch** → ветка `gh-pages` → папка `/ (root)`.

## Сборка проекта

```bash
npm run build
```

Собранные файлы появятся в папке `dist/`. Локально проверить сборку можно
командой:

```bash
npm run preview
```

## Структура проекта

```
bagdat-kurentay-card/
├── .github/workflows/deploy.yml   # автодеплой на GitHub Pages
├── public/
│   ├── profile.jpg                # главная фотография
│   ├── favicon.svg
│   └── .nojekyll
├── src/
│   ├── components/
│   │   ├── AnimatedSection.tsx
│   │   ├── FooterTagline.tsx
│   │   ├── LinkButton.tsx
│   │   ├── LinksGroup.tsx
│   │   ├── ProfileHero.tsx
│   │   ├── ProfileInfo.tsx
│   │   └── SectionHeader.tsx
│   ├── data.ts                    # контакты и проекты (редактируйте здесь)
│   ├── useInViewOnce.ts           # хук для scroll-анимаций
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

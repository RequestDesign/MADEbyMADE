// Основной модуль
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfTottf, ttfTowoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgsprite } from './gulp/tasks/svgsprite.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.assets, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}
// Последовательность обработка шрифтов
const fonts = gulp.series(otfTottf, ttfTowoff, fontsStyle);
// Параллельное выполнение
const maintasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images, svgsprite)
);
// Построение сценариев выполнения задач
const dev = gulp.series(reset, maintasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);

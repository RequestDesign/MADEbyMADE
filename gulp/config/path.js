// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'; // Также можно использовать папку rootFolder
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    assets: `${buildFolder}/assets/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    assets: `${srcFolder}/assets/**/*.*`,
    svgsprite: `${srcFolder}/svg/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,png,gif,ico,webp}`,
    assets: `${srcFolder}/assets/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};

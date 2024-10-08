import svgSprite from 'gulp-svg-sprite';

export const svgsprite = () => {
  let config = {
    shape: {
      transform: [
        {
          svgo: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false,
                // params: {
                //   overrides: {
                //     removeViewBox: false,
                //     removeUnusedNS: false,
                //     removeUselessStrokeAndFill: true,
                //     cleanupIDs: false,
                //     removeComments: true,
                //     removeEmptyAttrs: true,
                //     removeEmptyText: true,
                //     collapseGroups: true,
                //     removeAttrs: { attrs: '(fill|stroke|style)' },
                //   },
                // },
              },
            ],
          },
        },
      ],
    },
    mode: {
      symbol: {
        dest: '.',
        sprite: 'sprite.svg',
      },
    },
  };

  return app.gulp
    .src(`${app.path.src.svgsprite}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <% error.message %>',
        })
      )
    )
    .pipe(svgSprite(config))
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};

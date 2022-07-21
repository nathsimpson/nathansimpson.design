const path = require('path');

module.exports = {
  components: './src/playroom/components',
  outputPath: './public/playroom',

  // // Optional:
  // title: 'My Awesome Library',
  themes: './src/playroom/themes',
  // snippets: './playroom/snippets.js',
  frameComponent: './src/playroom/frame',
  // scope: './playroom/useScope.js',
  // widths: [320, 768, 1024],
  // port: 9000,
  openBrowser: false,
  // paramType: 'search', // default is 'hash'
  // exampleCode: `
  //   <Button>
  //     Hello World!
  //   </Button>
  // `,
  // baseUrl: '/playroom/',
  webpackConfig: () => ({
    resolve: {
      alias: {
        '@design-system': path.resolve(__dirname, '../design-system')
      }
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward'
            }
          }
        }
      ]
    }
  })
  // typeScriptFiles: [
  //   // '../design-system/*/src/**/*.{ts,tsx}',
  //   '../design-system/packages/*/src/**/*.{ts,tsx}',
  //   '!**/node_modules'
  // ]
  // iframeSandbox: 'allow-scripts',
};

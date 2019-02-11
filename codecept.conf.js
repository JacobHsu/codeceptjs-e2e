exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true, // Puppeteer starts a browser without showing its window. To see the browser, edit codecept.json config and set show: true for Puppeteer
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-e2e'
}
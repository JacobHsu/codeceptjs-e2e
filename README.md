# codeceptjs-e2e

[CodeceptJS](https://codecept.io/) · Modern End 2 End Testing Framework for NodeJS

Web 自動化測試，又叫 UI 自動化測試，國外叫 End-to-End Test（e2e, 端到端測試），可以讓重複繁瑣的手工測試（ 俗稱點點點）通過程序自動執行，可以極大地提升測試人員的效率  


## [Quickstart](https://codecept.io/quickstart) 

In this guide we will use Google Chrome Puppeteer as a driver for browsers. This allows us to start in a minutes with no extra tools installed

1. Install CodeceptJS with Puppeteer  
`npm install codeceptjs puppeteer --save-dev`  

2. Initialize CodeceptJS in current directory by running:
`./node_modules/.bin/codeceptjs init`   choose *Puppeteer*

3. Create First Test.
`./node_modules/.bin/codeceptjs gt`  

    ? Filename of a test `try`  
    > try_test.js  codecept.conf.js  tests: './*_test.js',  

4. Run a test:
`./node_modules/.bin/codeceptjs run --steps`  


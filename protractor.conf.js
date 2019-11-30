// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 600000,
  specs: [
    './src/**/*.e2e-spec.ts',
    './e2e/**/*.spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        // "--headless",
        // "--incognito",
        // "--start-maximized"
        // "--window-size=1920,1080"
      ]
    },
    // shardTestFiles: true,
    // maxInstances: 5
  },

  SELENIUM_PROMISE_MANAGER: false,

  directConnect: true,
  //seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  baseUrl: 'http://localhost:4200/',

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000000,
    print: function() {}
  },

  async onPrepare() {
    /**
     * @type { import("protractor").ProtractorBrowser }
     */
    const browser = global['browser'];
    
    // browser.manage().timeouts().implicitlyWait(2000);
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

    jasmine.getEnv().addReporter(new SpecReporter({
      // https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
      spec: {
        displayStacktrace: true
      }
    }));

    jasmine.getEnv().addReporter({
      specDone: async (result) => {
        if (result.failedExpectations.length >0) {
          let png = await browser.takeScreenshot(); 
          var stream = require('fs').createWriteStream(
          "./failuretests/failureScreenshot.png"); 
          stream.write(new Buffer(png, 'base64')); 
          stream.end();
        } 
      }
    });

    /**
     * @type { import("protractor").ProtractorBrowser }
     */
    // const browser = global['browser'];
    // await browser.manage().timeouts().implicitlyWait(2000);
  }
};

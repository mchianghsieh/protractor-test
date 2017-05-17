exports.config = {
  
  directConnect: true,
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    //'browserName': 'firefox'
    'browserName': 'chrome'
  },
  
  /*
  multiCapabilities: [{
	    browserName: 'firefox'
	  }, {
	    browserName: 'chrome'
	  }]
  */
  
  framework: 'jasmine2',
  
  //seleniumAddress: 'http://localhost:4444/wd/hub',
    
  //specs: ['tests/Exp.js' ],
  specs: ['tests/Login/Login-Test.js','tests/MatchAndMerge/ClickMatchMerge-Test.js' ],
  
  /*
  specs: [
          'tests/*-Test.js'
      ],
  */
  
  onPrepare: function() {
	 
	    // Reporters.
	    var SpecReporter = require('jasmine-spec-reporter');
	    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	    var jasmineReporters = require('jasmine-reporters');
	 
	    // Add jasmine spec reporter.
	    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
	 
	    return browser.getProcessedConfig().then(function(config) {
	 
	        var browserName = config.capabilities.browserName;
	 
	        // Add HTML reporter.
	        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
	            savePath: 'test_results/html/' + browserName + '/',
	            takeScreenshots: true,
	            takeScreenshotsOnlyOnFailures: true,
	            filePrefix: browser.params.env + '-' + browserName + '-report.html',
	            screenshotsFolder: 'images'
	        }));
	    });
	
		  /*
		  var AllureReporter = require('jasmine-allure-reporter');
		  jasmine.getEnv().addReporter(new AllureReporter({
		    resultsDir: 'allure-results'
		  }));
		  
		  
		  
		  jasmine.getEnv().addReporter(new AllureReporter());
		    jasmine.getEnv().afterEach(function(done){
		      browser.takeScreenshot().then(function (png) {
		        allure.createAttachment('Screenshot', function () {
		          return new Buffer(png, 'base64')
		        }, 'image/png')();
		        done();
		      })
		    });
		 }
		  
		 */
		  	  
		   // require('ts-node').register({ project: 'e2e' });
		  
//		    console.log('Parameters: ' + JSON.stringify(browser.params));
  }
  
}
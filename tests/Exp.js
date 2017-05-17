describe("Test login", function(){
	
	// import class files
	var log = require('../util/log.js');
	var TestData = require('../json/TestPropertyData.json');
	var login = require('../pages/LoginPage.js');
		
	// get URL from test data and open it
	browser.get(TestData.TestSiteURL);
	
	// maximize the browser window
	browser.manage().window().maximize();
	
	//browser.waitForAngular();
	
	// Test Step 1 - enter username
	it("Validating Enter Username", function(){
		
		// send text to username 
		login.setName("Miller");
		
		log.info("Actual: Enter Username");
		log.info("Expect: Username should be entered ");
		
		// wait for few seconds
		browser.sleep(1500);
		
		//get value entered in web page
		var getEnteredUsername = login.getUsername().getAttribute('value');
		
		// print entered value from web page
		log.info("Print value before .then method: " + getEnteredUsername);
						
		getEnteredUsername.then(function(getValue){
			
			log.info("Print value after .then method: " + getValue);
								
		});
						
	});
	
});
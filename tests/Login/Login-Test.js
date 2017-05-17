
describe("Test login", function(){
	
	// import class files
	var log = require('../../config/log.js');
	var TestData = require('../../config/TestPropertyData.json');
	var login = require('../../pages/LoginPage.js');
	var dataview = require('../../pages/DataviewPage.js');
	
	// get URL from test data and open it
	browser.get(TestData.TestSiteURL);
	
	// maximize the browser window
	browser.manage().window().maximize();
	
	//browser.waitForAngular();
	
	// Test Step 1 - enter username
	it("Validating Enter Username", function(){
		
		// send text to username 
		login.setName(TestData.UserCredential.username);
		
		log.info("Actual: Enter Username");
		log.info("Expect: Username should be entered ");
		
		// wait for few seconds
		browser.sleep(1500);
		
		//get value entered in web page
		var getEnteredUsername = login.getUsername().getAttribute('value');
						
		getEnteredUsername.then(function(getValue){
			
			// get username value from test property data file
			var value1 = TestData.UserCredential.username;
					
			// compare values from test file and entered from web page
			if (getValue == value1){
				
				log.info("Result: Passed! ");
				
			}else{
				
				log.info("Result: failed! ");
				
			}
								
		});
						
	});		
	
	// Test Step 2 - Enter Password	
	it("Validating Enter Password", function(){
		
		log.info("Actual: Enter Password")
		log.info("Expect: Password should be entered ")
		
		// send text to password
		login.setPassword(TestData.UserCredential.password);
				
		browser.sleep(1500);
		
		var getEnteredPassword = login.getPassword().getAttribute('value');
							
		getEnteredPassword.then(function(getValue){
			
			//log.info("Print out sent password: "  + getValue);
						
			var value1 = TestData.UserCredential.password;
			
			if (getValue == value1){
				
				log.info("Result: Passed! ");
				
			}else{
				
				log.info("Result: failed! ");
				
			}
				
			
		});
			
	});		
		
	// Test Step 3 - click login button
	it("Validating Click Login button", function(){	
		
		log.info("Actual: Click Login Button")
		log.info("Expect: Should login successfully ")
		
		// click login button
		login.clickLogin();
					
		browser.sleep(7000);
		
		(dataview.setting().isDisplayed()).then(function(isVisible) {
			
			if(isVisible){
			
				log.info("Result: Passed! ");
				
			} else {
				
				log.info("Result: Failed! ");
				
			}
						
		});
		
	});		
});
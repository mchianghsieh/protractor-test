describe("Click Logout", function(){
	
	// import class files
	var log = require('../../config/log.js');
	var dataview = require('../../pages/DataviewPage.js');
	var login = require('../../pages/LoginPage.js');
	
	
	// Test Step 1 - click Setting icon
	it("Validate click Setting icon", function(){
		
		log.info("Actual: Click Setting icon");
		log.info("Expect: Should display setting page")
		
		// click setting icon
		dataview.setting().click();
		
		// wait for few seconds
		browser.sleep(3000);
		
		(dataview.logoutButton().isDisplayed()).then(function(isVisible) {
			
			if(isVisible){
			
				log.info("Result: Passed! ");
				
			} else {
				
				log.info("Result: Failed! ");
				
			}
						
		});
				
	})
	
	// Test Step 2 - click logout button
	it("Click Logout button", function(){
	
		log.info("Actual: Click logout button");
		log.info("Expect: Should logout successfully and return to home page")
		
		// click logout button
		dataview.clickLogout();
		
		// wait for few seconds
		browser.sleep(4500);
		
		(login.getUsername().isDisplayed()).then(function(isVisible) {
			
			if(isVisible){
			
				log.info("Result: Passed! ");
				
			} else {
				
				log.info("Result: Failed! ");
				
			}
						
		});
				
		
	});
		
	
});
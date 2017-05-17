describe("Test All Repositories drop down", function(){
	
	// import class files
	var log = require('../../config/log.js');
	var TestData = require('../../config/TestPropertyData.json');
	var login = require('../../pages/LoginPage.js');
	var dataview = require('../../pages/DataviewPage.js');
	
	
	it("Select EUC_Party_Merge repository from All Repositories Drop down", function(){
	
		log.info("Actual: Click and Select EUC_Party_Merge from All Repositories drop down ")
		log.info("Expect: Should return EUC_Party_Merge repository data information ")
		
		// click All Repositories drop down box
		dataview.AllRepositoryDropDown().click();
		
		// wait for few seconds
		browser.sleep(2000);
		
		// select option one 
		dataview.AllRepositoryOption1().click();
		
		// wait for few seconds
		browser.sleep(3000);

		//expect(dataview.TableColumnHeader1.getText()).toEqual("CMN_CNSNT_CD");
		
		// get table column one text
		var getHeader1 = dataview.TableColumnHeader1.getText();
		
		getHeader1.then(function(getHeader1Value){
			
			log.info("Print out table column 1 text: " + getHeader1Value);
			
		}); 
		
		
									
	});
		
	
	
});



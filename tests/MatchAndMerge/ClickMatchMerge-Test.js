describe("Go To Match & Merge Page", function(){
	
	// import class files
	var log = require('../../config/log.js');
	var matchAndMerge =  require('../../pages/MatchMergePage.js');
	
	
	it("Click Match & Merge", function(){
	
		log.info("Actual: Click Match & Merge ")
		log.info("Expect: Should display Match & Merge page ")
		
		// click All Repositories drop down box
		matchAndMerge.MatchMerge().click();
				
		// wait for few seconds
		browser.sleep(2000);
		
	
//		// get table column one text
//		var getHeader1 = dataview.TableColumnHeader1.getText();
//		
//		getHeader1.then(function(getHeader1Value){
//			
//			log.info("Print out table column 1 text: " + getHeader1Value);
//			
//		}); 
		
	}); 	
									
});
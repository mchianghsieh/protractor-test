/**
 * http://usejsdoc.org/
 */

var DataviewPage = function() {
	
	// Setting Icon
	this.setting = function() {
				
		return element(by.id("more_apps"));
		
	};
	
	// Logout Button
	this.logoutButton = function(){
		
		return element(by.linkText("Log Out"));
		
	};
	
	// Click Logout 
	this.clickLogout = function() {
		
		return element(by.linkText("Log Out")).click();
	};
	
	// All Repositories Drop down box
    this.AllRepositoryDropDown = function() {
		
		return element(by.model("DVNavCtrl.repositoryItem"));
	};
	
	// All Repositories Option 1
    this.AllRepositoryOption1 = function() {
		
		return element(by.id("ui-select-choices-row-0-0"));
	};
	
	// Table column 1 header
	this.TableColumnHeader1 = function() {
		
		return element(by.id("1493751727662-uiGrid-00LE-header-text"));
	};
	
	
};


module.exports = new DataviewPage();
var LoginPage = function() {

	this.setName = function(name) {
		
		//nameInput.sendKeys(name);
		element(by.model("username")).sendKeys(name);
		
	};
	
	this.setPassword = function(password) {
		
		//passwordInput.sendKeys(password);
		element(by.model("password")).sendKeys(password);
		
	};
	
	this.clickLogin = function() {
				
		return element(by.linkText("LOGIN")).click();
		
	};
	
	this.getUsername = function() {
		
		return element(by.name("username"));
	}
	
	this.getPassword = function() {
		
		return element(by.name("password"));
	}
	
};

module.exports = new LoginPage();

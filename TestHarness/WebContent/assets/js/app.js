var app = angular.module("ContactApp", [])
{
	app.controller('TimeCtrl', function($scope, $interval) {
		var tick = function() {
			$scope.clock = Date.now();
		}
		tick();
		$interval(tick, 1000);
	});

	app.controller("HeaderCtrl", HeaderCtrl);
	app.controller("FooterCtrl", FooterCtrl);
	app.controller("ContactCtrl", ContactCtrl);

	// Value service provides object to "AppName" symbol
	app.value("AppDataSvc", {
		name: "Contact App",
		author: "George Bradley",
		compant: "ACME Services",
		version: 1

	});

	function ContactCtrl() {
		this.contacts = getContactsAsJson();

		this.selectedContact = this.contacts[0];
		this.activatedIndex = 0;

		this.selectContact = function(index) {
			this.selectedContact = this.contacts[index];
			this.activatedIndex = index;
		}
	}
}

// Inject an object into the controller
// The controller "declares its dependencies
function HeaderCtrl(AppDataSvc) {
	this.appTitle = AppDataSvc.name;
}
function FooterCtrl(AppDataSvc) {
	this.appTitle = AppDataSvc.name;
}

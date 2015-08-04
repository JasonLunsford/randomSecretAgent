angular.module('randomPersonChallengeApp.services', [])
	.factory("BaconIpsumRestangularApi", ["Restangular",
		function(restangular) {

		return restangular.withConfig(function(RestangularConfigurer) {
		    RestangularConfigurer.setBaseUrl("https://baconipsum.com");
		});
	}])

	.factory("RandomPersonRestangularApi", ["Restangular",
		function(restangular) {

		return restangular.withConfig(function(RestangularConfigurer) {
		    RestangularConfigurer.setBaseUrl("https://randomuser.me");
		});
	}]);
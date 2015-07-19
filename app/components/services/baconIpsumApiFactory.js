angular.module('randomPersonChallengeApp.services')
	.factory("BaconIpsumApiFactory", ["Restangular",
		function(restangular) {

		return restangular.withConfig(function(RestangularConfigurer) {
		    RestangularConfigurer.setBaseUrl("https://baconipsum.com");
		});
}]);
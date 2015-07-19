angular.module('randomPersonChallengeApp', [
	'randomPersonChallengeApp.services',

	'randomPersonChallengeApp.random_person_component',

	'angularMoment',
	'ngMaterial',
	'restangular',
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
    function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home.tpl.html'
            });

		// Material Design Configuration
		$mdThemingProvider.theme('default')
			.primaryPalette('deep-purple', {
				'default': '700'
			})
			.backgroundPalette('grey', {
				'default': '700'
			})
			.accentPalette('light-green', {
				'default': '300'
			});

    }])

.controller('RandomGlobalCtrl', ['$state', 'moment',
	function($state) {
		var that = this;
		that.title = "Secret Agent Generator!";
	}]);
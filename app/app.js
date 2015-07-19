angular.module('randomPersonChallengeApp', [
	'randomPersonChallengeApp.services',

	'randomPersonChallengeApp.random_person_component',

	'angularMoment',
	'ngMaterial',
	'restangular',
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home.tpl.html'
            });

    }])

.controller('RandomGlobalCtrl', ['$state', 'moment',
	function($state) {
		var that = this;
		that.title = "Secret Agent Generator!";

	}]);
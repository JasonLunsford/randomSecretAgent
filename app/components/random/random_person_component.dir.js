angular.module('randomPersonChallengeApp.random_person_component', [])

.directive('randomPersonComponent', ['RandomPersonService', 'BaconIpsumService', function(RandomPersonService, BaconIpsumService) {
        return {
            restrict    : 'EA',
            templateUrl : 'components/random/random_person_component.tpl.html',
            controller  : function($scope) {
            	RandomPersonService.getRandomPerson().then(function(data) {
            		$scope.ourSecretAgent = data.results[0].user;
            		$scope.dateOfBirth = moment.unix(data.results[0].user.dob).format("MMMM Do YYYY");
            		BaconIpsumService.getRandomCopy().then(function(copyData) {
            			$scope.randomDossier = copyData[0];
            		});
            	});
            },
            link		: function(scope, element, attribs) {
            	scope.fetchAgent = function() {
	            	RandomPersonService.getRandomPerson().then(function(data) {
	            		scope.ourSecretAgent = data.results[0].user;
	            		scope.dateOfBirth = moment.unix(data.results[0].user.dob).format("MMMM Do YYYY");
	            		BaconIpsumService.getRandomCopy().then(function(copyData) {
            				scope.randomDossier = copyData[0];
            			});
	            	});
	            };
            }
        };
    }]);
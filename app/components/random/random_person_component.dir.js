angular.module('randomPersonChallengeApp.random_person_component', [])

.directive('randomPersonComponent', ['RandomPersonService', 'BaconIpsumService',
	function(RandomPersonService, BaconIpsumService) {
        return {
            restrict    : 'EA',
            scope		: {
            				title:'@title'
            			  },
            templateUrl : 'components/random/random_person_component.tpl.html',
            controller  : function($scope) {
            	RandomPersonService.getRandomPerson().then(function(data) {
            		var agentData = data.results[0].user;

            		$scope.ourSecretAgent = agentData;
            		$scope.presumedName = '"'+agentData.name.title+" "+agentData.name.first+" "+agentData.name.last+'"';
            		$scope.dateOfBirth = moment.unix(agentData.dob).format("MM-DD-YYYY");

            		BaconIpsumService.getRandomCopy().then(function(copyData) {
            			$scope.randomDossier = copyData[0];
            		}).catch(function(err) {
            			$scope.randomDossier = "Classified!";
            		});
            	});
            },
            link		: function(scope, element, attribs) {
            	scope.fetchAgent = function() {
	            	RandomPersonService.getRandomPerson().then(function(data) {
	            		var agentData = data.results[0].user;

	            		scope.ourSecretAgent = agentData;
	            		scope.presumedName = agentData.name.title+" "+agentData.name.first+" "+agentData.name.last;
	            		scope.dateOfBirth = moment.unix(agentData.dob).format("MM-DD-YYYY");
	            		BaconIpsumService.getRandomCopy().then(function(copyData) {
            				scope.randomDossier = copyData[0];
            			});
	            	});
	            };
            }
        };
    }]);
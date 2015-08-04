angular.module('randomPersonChallengeApp.services')
	.service('RandomPersonService', ['Restangular', 'RandomPersonRestangularApi',
        function(Restangular, RandomPersonRestangularApi) {

    	var RandomPersonService = this,
    	    randomPersonApiBase = RandomPersonRestangularApi.all('/api');

        /**
         * Go get a random secret agent!
         * @param [empty]
         * @returns {Promise}
         */
    	RandomPersonService.getRandomPerson = function() {
    		return randomPersonApiBase.one('/').get();
    	};

}]);
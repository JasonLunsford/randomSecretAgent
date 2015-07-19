angular.module('randomPersonChallengeApp.services')
	.service('RandomPersonService', ['Restangular', 'RandomPersonApiFactory',
        function(Restangular, RandomPersonApiFactory) {

    	var RandomPersonService = this,
    	    randomPersonApiBase = RandomPersonApiFactory.all('/api');

        /**
         * Go get a random secret agent!
         * @param [empty]
         * @returns {Promise}
         */
    	RandomPersonService.getRandomPerson = function() {
    		return randomPersonApiBase.one('/').get();
    	};

}]);
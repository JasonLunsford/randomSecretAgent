angular.module('randomPersonChallengeApp.services')
	.service('BaconIpsumService', ['Restangular', 'BaconIpsumApiFactory',
        function(Restangular, BaconIpsumApiFactory) {

    	var BaconIpsumService = this,
            baconIpsumCopyApiBase = BaconIpsumApiFactory.all('/api/');

        /**
         * Go get some random bacon...i mean copy!
         * @param [empty]
         * @returns {Object}
         */
        BaconIpsumService.getRandomCopy = function() {
            return baconIpsumCopyApiBase.customGET("",{type:'meat-and-filler', paras:1});
        };

}]);
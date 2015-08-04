angular.module('randomPersonChallengeApp.services')
	.service('BaconIpsumService', ['Restangular', 'BaconIpsumRestangularApi',
        function(Restangular, BaconIpsumRestangularApi) {

    	var BaconIpsumService = this,
            baconIpsumCopyApiBase = BaconIpsumRestangularApi.all('/api/');

        /**
         * Go get some random bacon flavored copy! Yum...bacon!
         * @param [empty]
         * @returns {Object}
         */
        BaconIpsumService.getRandomCopy = function() {
            return baconIpsumCopyApiBase.customGET("",{type:'meat-and-filler', paras:1});
        };

}]);
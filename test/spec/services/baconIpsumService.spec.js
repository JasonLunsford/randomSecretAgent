describe('Global Bacon Service: BaconIpsumService', function() {
	var baconIpsumService;

	beforeEach(module('randomPersonChallengeApp'));
		beforeEach(inject(function(_baconIpsumService_) {
			baconIpsumService = _baconIpsumService_;
		}));

		it('should return some bacon themed lorem ipsum', function() {
			// add expect statement here
			// baconIpsumService.getRandomCopy()
		});

})
describe('Global Random Service: RandomPersonService', function() {
	var randomPersonService;

	beforeEach(module('randomPersonChallengeApp'));
		beforeEach(inject(function(_randomPersonService_) {
			randomPersonService = _randomPersonService_;
		}));

		it('should return one random human', function() {
			// add expect statement here
			// randomPersonService.getRandomPerson()
		});

})
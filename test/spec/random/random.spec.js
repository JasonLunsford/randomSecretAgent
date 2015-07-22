describe('Component Directive: randomPersonComponent', function() {
	var $scope, $compile;

	beforeEach(module('randomPersonChallengeApp'));
		beforeEach(inject(function($rootScope, _$compile_) {
			var element;

  			$scope = $rootScope.$new(),
  				$compile = _$compile_;

  			element = $compile('<div random-person-component title"></div>')($scope);

  			$scope.$digest()
		}));

		describe('when page compiles random person directive', function() {

			it('show title if no title passed', function() {
				// add expect statement here
				// basically test if scope.title is empty, if so test fails
			});

			it('display Click Me button', function() {
				// add expect statement here
				// ex: expect(element.button.html()).toContain('Click Me');
			});

			it('should load random person api', function() {
				// add expect statement here
				// will need to grab ahold of service
			});

			it('should load bacom ipsem api', function() {
				// add expect statement here
				// will need to grab ahold of service
			});
		});
})
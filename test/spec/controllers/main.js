'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('fizzbuzzApp'));

    var MainCtrl,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('If a multiple of 3 return fizz', function () {
        expect(scope.fizzBuzz(12)).toBe('fizz');
        expect(scope.fizzBuzz(3039)).toBe('fizz');
        expect(scope.fizzBuzz(999)).toBe('fizz');
        expect(scope.fizzBuzz(-3)).toBe('fizz');
    });

    it('If a multiple of 5 return buzz', function () {
        expect(scope.fizzBuzz(5)).toBe('buzz');
        expect(scope.fizzBuzz(10)).toBe('buzz');
        expect(scope.fizzBuzz(500)).toBe('buzz');
        expect(scope.fizzBuzz(-10)).toBe('buzz');
    });

    it('If a multiple of 3 and 5 return fizzbuzz', function () {
        expect(scope.fizzBuzz(15)).toBe('fizzbuzz');
        expect(scope.fizzBuzz(30)).toBe('fizzbuzz');
        expect(scope.fizzBuzz(600)).toBe('fizzbuzz');
        expect(scope.fizzBuzz(-30)).toBe('fizzbuzz');
        expect(scope.fizzBuzz(0)).toBe('fizzbuzz');
    });

    it('If none of the above rules are true return the variable', function () {
        expect(scope.fizzBuzz(1)).toBe(1);
        expect(scope.fizzBuzz(301)).toBe(301);
        expect(scope.fizzBuzz(2)).toBe(2);
        expect(scope.fizzBuzz(7)).toBe(7);
        expect(scope.fizzBuzz(7)).toBe(7);
        expect(scope.fizzBuzz('NaN')).toBe('NaN');
    });
});

var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {

    //Factorial of 0
    it('should return 1 if the factorial is 0', function() {
        const expected = 1;
        const result = Calculate.factorial(0);
        assert.equal(result, expected);
    });

    // Testing the factorial of number 5!, should return 120.
    it('the factorial of 5!', () => {
        const expected = 120;
        const result = Calculate.factorial(5);
        assert.equal(result, expected);

    });

    // Testing the factorial of 9!, should return 362880
    it('the factorial of 9!', () => {
        const expected = 362880;
        const result = Calculate.factorial(9);
        assert.equal(result, expected);
    });

    //Testing the factorial of 3!, should return 6
    it('the factorial of 3!', () => {
        const expected = 6;
        const result = Calculate.factorial(3);
        assert.equal(result, expected);
    });

  });

  //if we pass an argument that isn't a number
  describe('.test if the parameter is not a number', function() {
      //passing a non number type, should return an error
      it('the funciton should throw an error!', function() {
        assert.throws(
            () => {
                Calculate.factorial('n');
        });
        TypeError
      });   
  })
});


describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('isDivisibleBy', function() {
    it('is divisible by 3', function() {
      expect(fizzbuzz.isDivisibleBy(3, 3)).toEqual(true);
    });
    it('is not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleBy(3, 4)).toEqual(false);
    });
    it('is divisible by 5', function() {
      expect(fizzbuzz.isDivisibleBy(5, 5)).toEqual(true);
    });
    it('is divisible by 5', function() {
      expect(fizzbuzz.isDivisibleBy(5, 10)).toEqual(true);
    });
    it('is not divisible by 5', function() {
      expect(fizzbuzz.isDivisibleBy(5, 7)).toEqual(false);
    });
    it('is divisible by 3 & 5', function() {
      expect(fizzbuzz.isDivisibleBy(3, 15, 5)).toEqual(true);
    });
    it('is not divisible by 3 & 5', function() {
      expect(fizzbuzz.isDivisibleBy(3, 13, 5)).toEqual(false);
    });
  });

  describe('run', function(){
    it('returns Fizz when divisible by 3', function() {
      expect(fizzbuzz.run(3)).toEqual("Fizz")
    });
    it('returns Buzz when divisible by 5', function() {
      expect(fizzbuzz.run(5)).toEqual("Buzz")
    });
    it('returns FizzBuzz when divisible by 15', function() {
      expect(fizzbuzz.run(15)).toEqual("FizzBuzz")
    });
  });
});

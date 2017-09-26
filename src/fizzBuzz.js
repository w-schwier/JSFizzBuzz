function FizzBuzz() {
};


FizzBuzz.prototype.isDivisibleBy = function (divNumber, number) {
  return number % divNumber === 0
};

FizzBuzz.prototype.run = function (number) {
  if (this.isDivisibleBy(15,number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleBy(3,number)) {
    return 'Fizz';
  } else if (this.isDivisibleBy(5,number)) {
    return "Buzz";
  } else {
    return number;
  }
};

FizzBuzz.prototype.log = function () {
  for (var i = 0; i <= 100; i++) {
    console.log(this.run(i))
  };
};

for (let number = 0; number <= 100; number++) {
  switch(true) {
    case number % 5 == 0 && number % 3 == 0:
      console.log("FizzBuzz");
      break;
    case number % 5 == 0 && number % 3 != 0:
      console.log("Buzz");
      break;
    case number % 3 == 0:
      console.log("Fizz");
      break;
    default:
      console.log(number);
      }
  }

  // my solution ^^^

  for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// eloquent's solution ^^^
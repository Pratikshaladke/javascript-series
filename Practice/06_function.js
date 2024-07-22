// Q.1. create a function using the "function" keyword that taks a string as an argument & returns the number of vowels in the string;
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowels("AAHHvvaa");

// Q.2. Create an arrow function to perform the same task

const vow = (str) => {
    let count = 0;
    for (const char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
      ) {
        count++;
      }
    }
    console.log(count);
}
vow("helloworld")
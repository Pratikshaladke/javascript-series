// Q.1 Print all even numbers from 0 to 100.
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Q. 2 Create a game where you start with the random game number. Ask the user to keep guessing the game number until the uset enters correct values.

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
  userNum = prompt("You entered wrong number. Guess again : ");
}

console.log("congratulations, you entered right number");

// Q. 1 Get user to input a number using prompt("Enter a number:")
// Check if the number is a multiple of 5 or not;

// prompt is way of taking input from user

// let num = prompt("Enter a number :");

// if (num % 5 === 0) {
//   console.log("number is a multiple of 5");
// } else {
//   console.log("number is NOT a multiple of 5 ");
// }

// Q. 2 write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = 3;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "c"
} else if ( score >= 50 && score <= 59){
    grade = "D"
} else if (score >= 0 && score <= 49) {
    grade = "F"
}
 
console.log("according to your scores, yor grade was :", grade);
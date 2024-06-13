// Conditional Statements
// if Statement

// Ex. 1
// let age = 16;
// if (age >= 18){
//     console.log("you can vote");
// }

// if (age < 18){
//     console.log("you cannot vote");
// }

// Ex. 2
// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light"){
//     color = "white";
// }
// console.log(color);

// if-else Statement
// Ex. 1
// let age = 16;
// if (age >= 18) {
//   console.log("vote");
// } else {
//   console.log("cannot vote");
// }

// Ex. 2
// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);

// Ex. 3 - odd or even
// let num = 10;

// if(num % 2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// else-if Statement
// Ex. 1
// let mode = "pink";
// let color;

// if (mode === "dark"){
//     color = "black";
// } else if (mode === "pink") {
//     color = "pink";
// } else if (mode === "blue"){
//     color = "blue";
// } else {
//     color = "white"
// }

// console.log(color);

// ternary operator
let age = 16;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// switch case
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

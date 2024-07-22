function myFunction() {
  console.log("Im Learning JS");
  console.log("I love JS");
}
myFunction();

function myFunc(msg) {
  console.log(msg);
}
myFunc("Hello World");

// create a function which will calculate sum of numbers
function sum(x, y) {
  console.log(x + y);
}
sum(10, 20);

// create a function which will calculate sum of numbers and return sum
function sumReturn(a,b){
    // local variables - scope within curly bracket
 c = a + b;
 return c;
}
let result = sumReturn(2,5);
console.log(result);


// arrow function
// subtraction function 
function sub(a, b){
    return a - b;
}

// using arrow function
const arrowSum = (a, b) => {
return a - b;
}
arrowSum(1,4)
s
//multiplication function 
function mul(a, b){
    return a * b;
}

const arrowMul = (a, b) => {
 return a * b;
} 
arrowMul(2,4);
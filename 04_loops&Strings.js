// For loop
// Ex. 1 print 1 to 5
// for (let i = 1; i <= 5; i++){
//     console.log("I love js");
// }

// Ex. 2  print i 5 times
// for (let i = 1; i <= 5; i++){
//     console.log("i", i);
// }
// console.log("i", i); //ReferenceError: i is not defined / i defined with let 



// Ex. 3 Calculate sum of 1 to n
// let sum = 0;
// let n = 50
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("Sum = ", sum);
// console.log("loop has ended");



// while loop
// Ex. 1 print 1 to 5
// let i = 1
// while (i<=5){
//  console.log(" i =", i);
//  i++;
// }




// do-while loop

// let i = 20;
// do {
//     console.log("i love js");
// } while (i <=10);

// Ex. 1 print 1 to 5
// let j = 1;
// do {
//     console.log("i love js");
//     j++;
// } while (j <=3);


//for-of loop
let str = "ILoveJS";
let size = 0;

for (let i of str){
    console.log("i =", i);
    size++;
}
console.log("String size = ", size);

//for-in loop
let student = {
    name: "pratiksha dongare",
    age: 24,
    cgpa: 7.8,
    isPass: true
};

for (let key in student){
    console.log("key = ", key , " value = ", student[key]);
}
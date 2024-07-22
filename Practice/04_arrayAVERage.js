// Q. 1. For a given array with marks of students -> [85,97,68,89,98,60].Find the average marks of the entire class.

let marks = [79, 89, 98, 90, 60];

let sum = 0;

for (let val of marks){
    sum = sum + val; // sum += val;
}
 let avg = sum / marks.length;
 console.log(`average marks of the class = ${avg}`);


 // Q. 2. For a given array with prices of 5 items -> [250, 645, 600,400,700] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

 let items = [250, 645, 600, 400, 700];

 for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer
 }

 console.log(items);
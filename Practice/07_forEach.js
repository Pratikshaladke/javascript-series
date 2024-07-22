// Q. For a given array of numbers, print the square of each value using the forEach loop.
let numbers = [28, 38, 94, 95, 456];

numbers.forEach((num) =>{
    console.log(num * num); // num**2
})

// we can also write like that 

let square = (num) =>{
    console.log(num * num); // num**2
}

numbers.forEach(square);
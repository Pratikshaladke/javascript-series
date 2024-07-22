let arr = [1,2,3,4,8];

const newValue = arr.reduce((res, value) =>{
    return res + value;
})

console.log(newValue)

// find the largest number 

const largest = arr.reduce((prev, curr) =>{
    return prev > curr ? prev : curr;
})

console.log(largest);
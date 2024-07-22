### 1st Video

### What is JS?

### DataTypes in JS

There are 2 types of Datatypes

1.  `Primitive data types, also known as build-in data types` => DT which are fixed and hold single value like number, string, boolean, undefined, null, symbol. A primitive type starts with a lowercase letter, primitives and immutable.

2.  `Non-Primitive data types, also known as reference data types` => Non-primitive data types are called reference types because they refer to objects. Non-primitive means storing multiple values in single variable. non-primitive types starts with an uppercase letter. they are mutable.

### 2nd Video

### Operators & Conditional Statements - Used to perform some operation on data

`Comments in Js` - Part of code which is not executed

Ex :-
// Single line Comment
/_ Multiline Comment _/

`Arithmatic Operators` =>
+, -, \*, /
Modulus = %
Exponentiation = ^

` Unary Operators`
Increment = ++
`a++` = post increment (change value in next line)

`++a` = pre increment (firstly chnage value then print)

Decrement = --
`a--` = post decrement (change value in next line)

`--a` = pre decrement (firstly chnage value then print)

`Assignment Operators` => (assign value)
=, +=, -=, \*=, %=, \*\*=

`Comparison Operators` => (Compare two values)
==, ===, !=, !==, >, >=, <, <=
`==` equal to
`===` equal to and type
`!=` not equal to
`!==` not equal to & type

`Logical  Operators` =>
`&&` Logical AND
`||` Logicl OR  
 `!` Logical Not

1.  `&&` Logical AND
    T && T = T
    T && F = F
    F && T = F
    F && F = F

2.  `||` Logicl OR
    T && T = T
    T && F = T
    F && T = T
    F && F = F

3) `!` Logical Not
   True = false
   false = true

### Conditional Statements - To implement some condition in the code

`syntax` - it means rules

1. if Statement -
   syntax -
   if(condition){

   }

2. if-else Statement - (if condition true execute if block otherwise execute else block)

   if(condition){

   } else {

   }

3. else-if Statement - (used for multiple condition)

   if(condition){

   } else-if {

   } else {

   }

`Ternary Operators or Conditional operator or Special Operator` => (worked on 3 operands, simpler if-else )
condition ? true : false
a ? b : c

`switch Statement` => (The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.)

switch (expression) {
case caseExpression1:
statements
case caseExpression2:
statements
// …
case caseExpressionN:
statements
default:
statements
}

### 3rd Video

### Loops in JS -

     Loops are used to execute a piece of code again & again

1. `For Loop`
   for (initial value; stopping condition; increment/decrement){
   for loop body
   }

2. `while Loop` - 1) we cannt write semicolon and the end of loop.
   while (stopping condition ){
   // do some work
   // updation
   }

3. `do-while Loop` - 1) it will exucute atleast once , because we will write our condition after the do condtion. 2) we will write semicolon at the end of loop.
   do {

   } while(condition);

4. `for-of Loop` - used to iterate string & arrays, it will ieterate each values of arrays and string.

   for (variable of iterable)
   statement

for (let val of strval) {
// do some work
}

5. `for-in Loop` - it is used to iterate the object. it will return keys.
   for (let key in objVar){
   //do some work
   }

### Strings

String is a sequence of characters used to represent text

`Create String`

      let str = "I Love Javascript";

` String Length`

      str.length

` String Indices`

      str[0], str[1]

### Template literals in Js

A way to have embedded expressions in strings.

Ex. `this is a template literals`

`String interpolation`
To create strings by doing substitution of placeholders.

`string text ${expression} string text`

`escape characters` - Basically used for adding text in new line

1.  \n = next line
2.  \t = tab

### STRING METHODS

1.  These are build-in functions to manipulate a string.
2.  String methods does not change original string it will log new strings.
3.  Strings are immutable.

String Methods.

1.  `str.toUpperCase()` // convert string into upper case.

2.  `str.toLowerCase()` // convert string into lower case.

3.  `str.trim()` // removes whitespace.

4.  `str.slice(start, end?)` //return part of string, end value should be optional. `(start, endindex - 1)`.

5.  `str1.concat(str2)` // join str2 with str1, it will return new string, we also concat multiple strings.

6.  `str.replace(searchValue, newValue)` // used for searching value in string, replace newValue with searchValue. It will only replace first seachvalu , if duplicate character are available

            `ex -
            let str2 = "Hello";
            console.log(str2.replace('l' , 's'));
            `.

7.  `str.chartAt(idx)` //search character at particular .

### 4th Video

### ARRAYS

Collection of items, Arrays are mutable.

### Array Indices(Index)

arr[0], arr[1], arr[2],....

`Looping over an array`

`Arrays methods`

1. push() : Add element at the end of array. We can push multiple elemnt at a time.

2. pop() : Delete from end and return new array. It will only delete one element at time. It will change original array.

3. toString() : It will convert array to string. It will Not change in original array.

4. concat() : It will join multiple arrays and returns result. It will return new arrays.

5. unshift() : Add element at the start of an array. We can add multiple element in the array.

6. shift() : Delete element from start and return.It will modify the original array.

7. slice() : Return piece of the array. it will not change original arrray.
   `slice(startIdx,endIdx)` endIndex - 1

8. splice() : change original array(add,remove,replace). It will change original array
   `splice(startidx,delcount,newEl1...)`

### 5th Video

### FUNCTION

Function is a block of code that performs a specific task, can be invoked(call) whenever needed.

Function parameters are like local variales of function having function scope

`Function Defination`

function functionName(){
//do some work
}

function functionName(param1,param2,...){
//do some work
}

`Function Call/Invoked`

functionName();

### Arrow Function

Compact way of writing the function

`Ex. const printHello = () => console.log("hello)`

const functionNName = (param1, param2,..){
//do some work
}

const sum = (a, b) =>{
return a + b;
}

`forEach Loop in Arrays`
arr.forEach(callBackFunction)

CallbackFunction :Here, it is a function to execute for each element in the array.

`CallbackFunction`
A callback is a function passed an an argument to another function.

arr.forEach((val) => {
console.log(val);
})

### Higher Order Function/Methods

It is a function which take function as a parameter or return another function.

### Some More Array Methods

`Map`
1. Creates a new array with the results of some operation. 
2. the value its callback returns are used to form new array.
3. It will return new array.
4. Basically map is used to return new value, based on the condition. 
   
arr.map(callbackFnx( value, index, array))

`Ex. `
let newArr = arr.map((val) => {
   return value*2;
})

`Filter`
1. Creates a new array of elements that give true for a condition/filter.
2. based on condition it will filter the values.
3. It will return new array.


`Reduce`
1. Perform some operations & reduces the array to a single value. 
2. It returns that single value.
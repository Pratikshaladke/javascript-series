let fruits = ["Mango", "Banana", "Lichi", "Apple"];
fruits.push("Guava");
console.log(fruits);

fruits.push("pomengrate", "lichi", "kiwi");
console.log(fruits);
let deletedFruit = fruits.pop();
console.log("deleted fruit is ", deletedFruit);
console.log(fruits);

let marks = [10, 20, 30, 40, 50];
console.log(marks.toString());

let marvelHeroes = ["thor", "spiderman", "ironman", "dr.change", "batman"];
let dcHeroes = ["superman", "batman"];
let hollyHeroes = ["BradPitt", "TomCruise"];

let heroes = marvelHeroes.concat(dcHeroes, hollyHeroes);
console.log(heroes);

marvelHeroes.unshift("antman", "shaktiman");
console.log(marvelHeroes);

marvelHeroes.shift();
console.log(marvelHeroes);

let marvel_heroes = ["thor", "spiderman", "ironman", "dr.change", "batman"];
console.log(marvel_heroes.slice(1, 5));

let arr = [1,2,3,4,5,6,7];
let newArr = arr.splice(2,0,101,102,103);
console.log(arr);

//delete element
arr.splice(3,1);
console.log(arr);

//replace element
arr.splice(3,1,101);
console.log(arr);

let arr1 = [1,2,3,4,5,6,7];
arr1.splice(4)
console.log("arr1",arr1); // output - [ 1, 2, 3, 4 ] act as a slice,if we pass only one parameter. 
let str = "HelloWorld";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1 = "    He  llo   Worl   d";
console.log(str.trim());

console.log("line9", str.slice(3)); // loWorld
console.log(str.slice(3, 5)); // lo
console.log("line11", str.slice(3, 1)); // nothing will return

let newStr = str.concat(str1);
let res = str + str1
console.log(newStr); // HelloWorld    He  llo   Worl   d
console.log(str1.concat(str)); // HelloWorld    He  llo   Worl   d
console.log(res);

let str2 = "Hellolo"; 
console.log(str2.replace('lo' , 'p')); // Help
console.log(str2.replace('l' , 'p')); // Heplo (it will only replace first l)
console.log(str2.replaceAll('lo' , 'p')); // Helpp (replace all matching value)


console.log(str.charAt(6)); // o
console.log(str.charAt(10)); // nothng will be print


let str3 = "ILoveJS";
str[0] = "S";
console.log(str3); // Expected SLoveJS , output - ILoveJS (Because string are immutable, original string can not be changed)

// let str4 = "ILoveJS"; output = SLoveJS 
let str4 = "ILoveJS";
str4 = str4.replace("I", "S")
console.log(str4);
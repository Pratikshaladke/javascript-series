//Q. 1 Prompt thw user to enter their fullName . Generate a username for them based on the input.Start username with @, followed by their fullname and ending with the fullname length.
// Eg: username = "pratikshadongare", username should be "@pratikshadongare10".


let fullname = prompt("enter your fullname without spaces");

let username = "@" + fullname + fullname.length;
console.log(username);
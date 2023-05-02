var x = "hello";
console.log(x);
var x = "work";
console.log(x);
// In particular, with var we can define two or more times a variable with the same name.

let y = "hello";
console.log(y);
// let y = "work"; // now we got an error.
console.log(y);

let z = "hello";
console.log(z);
// var z = "work"; // in ths case to. Because x already define.
console.log(z);

let j = 6;
j = 8;
// Having defined a variable, we can set its value and change it to something else while the program is running.

const k = 6;
// k = 8;  // error - we can't change k value, because this is a constant.


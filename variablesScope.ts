let x = 10;
{
    let x = 25;
    console.log(x); // 25
}
console.log(x); // 10
// For let an area that is defined by a block of code delimited by curly braces

let y = 10;
{
    let y = 25;
    {
        let y = 163;
        console.log(y); // 163
    }
    console.log(y); // 25
}
console.log(y); // 10
/////////////////

{
    var k = 94;
}
console.log(k); // okay
//////////////////

{
    let t = 94;
}
// console.log(t); // ! error

console.log(r); // undefined, but okay
var r = 76;

// console.log(w); // ! error. Block-scoped variable 'w' used before its declaration.
let w = 76;


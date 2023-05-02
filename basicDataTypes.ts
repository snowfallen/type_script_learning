//boolean
const flag: boolean = true;
console.log(typeof flag);

//number
const int: number = 42;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// @ts-ignore
let big: bigint = 100n;
const float: number = 5.14;
console.log(typeof int);
console.log(typeof float);


//string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.`

// Array
//TypeScript, like JavaScript, allows you to work with arrays of values.
// Array types can be written in one of two ways.
// In the first, you use the type of the elements followed by [] to denote an array of that element type:
const arrayNumber: number[] = [1,1,2,3,5,8,13];

//The second way uses a generic array type, Array<elemType>:
const arrayNumber2: Array<number> = [1,1,2,3,5,8,13];

console.log(typeof arrayNumber)
console.log(typeof arrayNumber2)

const arrayString: string[] = ['q','w','e','r','t','y','1'];
const arrayString2: Array<string> = ['q','w','e','r','t','y','2'];

// Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
const firstTuple: [string, number] = ['Arpil', 24]
console.log(typeof firstTuple)

//type
type ID = number | string

//type example
const userId: ID = 1232
const adminId: ID = 'asd1243das4323ed'

// Enum
// Enum. A helpful addition to the standard set of datatypes from JavaScript is the enum.
// As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
}
let c: Color = Color.Green;

// undefined || null
//In TypeScript, both undefined and null actually have their types named undefined and null respectively.
// Much like void, they’re not extremely useful on their own:

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// void
//void is a little like the opposite of any: the absence of having any type at all.
// You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
    console.log("This is my warning message");
}

// unknown
//We may need to describe the type of variables that we do not know when we are writing an application.
// These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API.
// In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything,
// so we give it the unknown type.

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

// any
//In some situations, not all type information is available or its declaration would take an inappropriate amount of effort.
// These may occur for values from code that has been written without TypeScript or a 3rd party library.
// In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:

declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

//The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
// Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
// These properties include functions and TypeScript will not check their existence or type

// never
//The never type represents the type of values that never occur.
// For instance, never is the return type for a function expression or an arrow
// function expression that always throws an exception or one that never returns.
// Variables also acquire the type never when narrowed by any type guards that can never be true.
// The never type is a subtype of, and assignable to, every type; however, no type is a subtype of,
// or assignable to, never (except never itself). Even any isn’t assignable to never.
// Some examples of functions returning never:


// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
    while (true) {}
}

// Object
// object is a type that represents the non-primitive type,
// i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
// With object type, APIs like Object.create can be better represented. For example:

declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);
create(undefined); // with `--strictNullChecks` flag enabled, undefined is not a subtype of null
// Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
//     Argument of type 'undefined' is not assignable to parameter of type 'object | null'.

create(42);
// Argument of type 'number' is not assignable to parameter of type 'object'.
//     Argument of type 'number' is not assignable to parameter of type 'object'.
create("string");
// Argument of type 'string' is not assignable to parameter of type 'object'.
//     Argument of type 'string' is not assignable to parameter of type 'object'.
create(false);
// Argument of type 'boolean' is not assignable to parameter of type 'object'.

// Type assertions
// Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
// Usually, this will happen when you know the type of some entity could be more specific than its current type.
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
// A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
// It has no runtime impact and is used purely by the compiler.
// TypeScript assumes that you, the programmer, have performed any special checks that you need.

let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;

// The other version is the “angle-bracket” syntax:
let someValue2: unknown = "this is a string";

let strLength2: number = (<string>someValue).length;
# Type script
### Install
```
npm i -g typescript
# or
yarn add global typescript
```
### Running 
```
tsc
```
### Comments for compiler
#### Disabling file verification
```
// @ts-nocheck
```
#### Enable file verification
```
// @ts-check
```
#### Ignore next line
```
// @ts-ignore
```
#### Waiting for an error on the next line
```
// @ts-expect-error
```
---
### Main data types
* ``any`` - represents all possible JavaScript values — primitives, objects, arrays, functions, errors, and symbols.
```
let value: any;
value = false; // OK
value = 123; // OK
value = "Hello"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
```
* ``string`` - string.
```
let string: string = 'Hello!'
```
* ``number`` - number (number , hexadecimal, octal binary, float, bigint).
```
let decimal: number = 123;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```
* ``boolean`` - boolean (true or false).
```
let empty: boolean = true
```
* ``object`` - object, not primitive data type value.
```
const user: {username: string, id: number, role: string} = {
    username: 'st98_admin',
    id: 433245324560002,
    role: 'admin'
}
```
*  ``never`` -  a value that cannot be raised (for example, when an exception is thrown or infinity loop).
```
function infinite(): never {
  while (true) {}
}
function catchError(message: string): never {
  throw new Error(message);
}
```
* ``unknown`` - value unknown at the time of type definition, unknown is a similar, but safer alternative to any. The unknown type is only assignable to the any type and the unknown type itself.
```
let value: any;
value = false; // OK
value = 123; // OK
value = "Hello"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
```
_What will we get when we try to assign a value of type unknown to variables of other types?_
```
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error
```
* ``null`` -  explicitly set to null, lack of value.
```
let n: null = null;
```
* ``undefined`` - By default ``null`` and ``undefined`` are subtypes of all other types. That means you can assign null and undefined to something like ``number``.
```
let u: undefined = undefined;
```
* ``void`` - is a little like the opposite of ``any`` You may commonly see this as the return type of functions that do not return a value.
```
function sayHi(): void {
  console.log("Hi!");
}
```
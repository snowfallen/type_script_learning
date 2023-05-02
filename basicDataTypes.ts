//boolean type
const flag: boolean = true;
console.log(typeof flag);

//number type
const int: number = 42;
console.log(typeof int);

const float: number = 5.14;
console.log(typeof float);

//array data structure ?? type ??
const arrayNumber: number[] = [1,1,2,3,5,8,13];
const arrayNumber2: Array<number> = [1,1,2,3,5,8,13];

console.log(typeof arrayNumber)
console.log(typeof arrayNumber2)

const arrayString: string[] = ['q','w','e','r','t','y','1'];
const arrayString2: Array<string> = ['q','w','e','r','t','y','2'];

//tuple
const firstTuple: [string, number] = ['Arpil', 24]
console.log(typeof firstTuple)

//type
type ID = number | string

//type example
const userId: ID = 1232
const adminId: ID = 'asd1243das4323ed'
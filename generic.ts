interface Contact {
    id: number;
    name: string;
}

interface UserContact<TExternalId> {
    id: number
    name: string
    username: string
    externalId: TExternalId
}

function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, UserContact<any>>(a)

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)

//////////////////

const getter = (data: any) => data
getter(10).length // undefined
getter('qwerty').length // 6

//ES6
const getter2 = <T> (data: T) : T => data
// getter2(10).length // Property 'length' does not exist on type '10'.
// getter2<string>(10).length // Argument of type 'number' is not assignable to parameter of type 'string'.
getter2<string>('qwerty').length // 6
//ES5
function getter3<T> (data: T) : T {
    return  data
}

class User {
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

class User2<T> {
    constructor(public name: T, public age: T) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

class User3<T, K extends number> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

type WithLength = {
    length: number
}

let t1 = 'HI';
let t2 = [1,2,3];
let t3 = {length : 10}

function withComment<U extends keyof WithLength>(item: U): [U, string] {
    return [item, `${item.length}`]
}
// function withComment(item: WithLength): [WithLength, string] {
//     return [item, `${item.length}`]
// }

let [item, comment] = withComment(t1)
console.log(item.length, comment)

type UserType = {
    firstName: string
    lastName: string
    age: number
}

type PhotoType = {
    large: string
    small: string
}

type ServerResponseType<T> = {
    errorCode: number
    messages: Array<string>
    data: T
}

const response1: ServerResponseType<UserType> = {
    errorCode: 0,
    messages: ['success'],
    data: {
        firstName: 'Sania',
        age: 24,
        lastName: 'Bondarenko'
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 0,
    messages: ['success'],
    data: {
        large: 'qeqweqwddqwdaawda',
        small: 'qeqweqwddqwdaawda'
    }
}

type Nullable<T> = null | T
const initial = {
    age: 24,
    name: 'Sano',
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>
}

type StateType = typeof  initial
const reducer = (state: StateType = initial, action: any) => {
  return state
}

const AC = (age: number) => ({type: 'SET-AGE', age} as const)
const AC2 = (firstName: string, lastName: string ) => ({type: 'SET-AGE', firstName, lastName})

type ACType = ReturnType<typeof AC>
type ACT2ype = ReturnType<typeof AC2>

type ACTypes = ReturnType<typeof AC> | ReturnType<typeof AC2>

const action: ACType = {type: 'SET-AGE', age: 24}
const action2: ACT2ype = {firstName: 'sas', lastName: 'dasdsa', type: 'dasdsa'}

interface Number {
    one: number
    two: string
}

const func = (value: keyof Number) =>{}
func('one')
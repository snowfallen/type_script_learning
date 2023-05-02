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
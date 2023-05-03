type ContactName = string;

type ContactStatus = "active" | "inactive" | "new"

type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact

function getValue<T, U extends  keyof T>(source: T, propertyName: U) {
    return source[propertyName]
}

const value = getValue({max: 1, min: 0}, 'min')
console.log(value)
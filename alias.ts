// primitive types
// type Name:string;
// let firstName3: Name;
// let lastName3 : Name;

// object types
type Person = {
  name: string;
  age: number;
}

let person : Person ={
  name: 'Mikasa',
  age: 20
}
console.log(person);

// union types
type alphanumeric = string | number;
let input : alphanumeric;
input = 100;
input = 'Hi';
input = 700;
// input = false;
console.log(input);

// intersection types
type Personal = {
  name: string;
  age: number;
}
type Contact = {
  email: string;
  phone: string;
}

type Candidate = Personal & Contact;

let candidate : Candidate ={
  name: "Joe Golberg",
  age: 26,
  email: "joe@example.com",
  phone: "2345667"
}

console.log(candidate);

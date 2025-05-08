// function Person(ssn, firstName, lastName){
//   this.ssn = ssn;
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// let person = new Person('123454', 'John', 'Hopkins');
// console.log(person.getFullName());

class Person{
  ssn: string;
  firstName:string;
  lastName : string;
  constructor(ssn: string, firsName: string, lastName: string){
    this.ssn = ssn;
    this.firstName = firsName;
    this.lastName = lastName;
  }
  getFullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());
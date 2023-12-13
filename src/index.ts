// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;

// function agrement(document: any) {
//   console.log(document);
// }
//arrays
// let numbers: number[] = [];

// let value = numbers.forEach((n) => n.toString());

//tuples
//1,'string'
// let user : [number,string]=[1,'string'];

// user.push(1) troublesome {compiler will not give the error }

//enum
// const small =1;
// const medium = 2;
// const large =3;

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// void mean it doesn't return any value
//taxYear? if u didn't pass the value  taxYear?: number
// u can give default value as well taxYear=2022 then we didn't user this (taxYear || 2022)
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 5000) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000);

// Javascript return bydefault undefined && undefined is not a number

//Object
//you can make anotate like this name? if u didn't use them in initialization
//readyonly modifier
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//Type Aliases
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };
// let employee: Employee = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//Union Types
function kgToLbs(weight: number | string): number {
  // to use specific method of number and string we use narrowing
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.3;
  }
}

kgToLbs(10);
// kgToLbs("10kg");

/*
// import {read} from "fs";
import { hay } from "./herlper.js";
// import yo from "./herlper.cjs";

console.log(hay);

// console.log(yo);

let helloWorld: string = "Hello World";

console.log(helloWorld);

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

 console.log(user.name);
*/

// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user: User = new UserAccount("Murphy", 1);

// console.log(user.name);

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}

greet("Maddison", new Date());

function getFavoriteNumber(): number {
  return 26;
}

console.log(getFavoriteNumber());

function pepek(person: string, date: Date) {
  console.log(`pantek ${person}, today is ${date.toDateString()}!`);
  console.log(
    "bapak kau lah " + person + ", today is " + date.toDateString() + "!"
  );
}
pepek("ali ga jelasss anyingggg euyyyy", new Date());

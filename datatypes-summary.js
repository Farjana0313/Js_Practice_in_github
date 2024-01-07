//  #Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbole, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let useEmail;

// Symbole
const mySymbol = Symbol("my symbol");
const id = Symbol('123')
const anotheriId = Symbol('123')

// console.log(id === anotheriId);
// BigInt
const bigNumber = 9007199254740991n;
// console.log(bigNumber);


// Reference Type (Non primitive)
// Array, Objects, Functions    

const heros = ["saktiman", "naagarraj", "doga"];
console.log(heros[0]);
const user = {
    name: 'John',
    age: 22
}

const myFunction = function () {
    console.log("hello world");
}

myFunction();


console.log(typeof myFunction);
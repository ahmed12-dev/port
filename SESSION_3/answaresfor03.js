// section 1 : Immutability 

// example
// *******
const anObj = {name:"Ahmed",age: 21}

const secondObj = {name:"Umi", age: 32}

const anOtherObj = anObj;

anOtherObj.age = 27;

console.log(anObj)


// challenge
// *********

// 1. Take an object with your mother’s name and your age. Now create an object for your sibling by
// age difference

// solution

const Ahmed = {mother:'Umi' , age: 32}
const Bil = {...Ahmed, age: Ahmed.age - 3}

console.log(Ahmed)
console.log(Bil)

Ahmed === Bil // false

// 2. Take an array with 5 colors. Create another array by adding 2 more colors to it.

// solution 

const colors = ['red', 'Yellow', 'blue' , 'green' , 'orange']
const moreColors = [ ...colors , ' pink' , 'purple']

 colors === moreColors  //false

console.log(moreColors)

// section 2: Pure functions
// *************************

// if a function have given in put with the same output it is Pure function
// and it is Immutable 

// example
// *******

function wishMeBirthDay(name) { console.log(`Happy Birthday ${name}`)}

x = wishMeBirthDay("Ahmed")

console.log(x)


// challenge

// 1. Write a function birthday() to take a person’s name and age in an object and then increase the
// age by 1. Return the updated object.

const birthday = (person) => ({...person, age: person.age + 1})

const person = {mother: 'Umi' , age: 32}
const AhmedAfterBirthDay = birthday(person)

console.log(AhmedAfterBirthDay)

person === AhmedAfterBirthDay //false

// Live Challenge 

// 1. Write an ES6 function increaseStock() to take a products’s name and quantity in an object and
// then increase the quantity by 5

// Solution
// ********

const increaseStock = (product) => ({
    ...product,
    quantity: product.quantity + 5,
})

const product = {name: 'ruled notebook' , quantity: 20}
const inventoryStock = increaseStock(product)
console.log(inventoryStock)


// section 2: Most used utility functions
// **************************************

// exercise 01: map

// Live Code Example
// 1. Given an array of numbers, return a new array with square root of each number in it.

// solution

const numbers1 = [1,4,9]
const roots = numbers1.map((num) => Math.sqrt(num))
console.log(roots)

// 1. Write an ES6 function that takes an array of numbers and returns an array with the square of
// each element using the map method.

// solution

const squareNumber = (numbers) => numbers.map((number) => number * number)
const numbers = [1,2,3,4,5]

console.log(squareNumber(numbers))

// 2. Write an ES6 function that takes an array of strings and returns an array with the length of each
// string using the map method.


const getLength = (stringsArray) => stringsArray.map((str) => str.Length)
const stringsArray = ['Future Lab' , ' coding' , ' programming']
console.lg(getLength(stringsArray))


// exercise 02: filter
// understanding
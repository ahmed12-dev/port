// alert("Hello")
// <!-- syntax over semantics -->
/*Kye Takeaways 
1. Always  use const unless required otherwise
2. Use let when u want to change the value
3. Define all vaiables at the top of scope 
4. Name your variables differently
5. stop usenig var from now on.
*/


// what is differece between TypeError and reference error?


// Short Arrow function while returni an object / objec literal syntax

// const giveAnObject = a => ({ value : a})
// console.log(giveAnObject(5))

// ES5+

// function nameOFFunction( argument1, argumrnt2){
//     var thevalueWeWanttoReturn = 42;
//     return thevalueWeWanttoReturn;
// }

// ES6+

// const nameOFFunctionES6 = (argument1 , argument2) => {
//      const thevalueWeWanttoReturn = 42;
//      return thevalueWeWanttoReturn;
// }

// const add22Retun1 = (num) => {
//     let sum = 0;
//     sum = num + 22;
//     return sum;
// }

// const add22Retun2 = num => {
//     let sum = 0;
//     sum = num + 22;
//     return sum;
// }

// const add22Retun3 = num => {
//     sum = num + 22;
//     return sum;
// }

// const add22Retun4 = num => num + 22

 
// const iAmAnOnj = {key : "and Te Value"}

// Dynamic fields |Object literal| Template
// #########################################
// const name = "tanay"

// const iAmAnObject = {[name] : "am the ValueIS"}


// const keyComingFrimSome = (keyName) => ({ [keyName] : "anothervalue"})

// const name = "tanay"

// const age = 21;

// const teacher = { name: name , age:age }

// const teacher2 = {name , age }


// const ahmed = { mother: 'umi' , age: 32 }
// const hmi = { ahmed, age: ahmed.age - 11}
// console.log(ahmed);
// console.log(hmi);


// const giveMeAFObject = (name , age) =>{
//     // some processing to be done on name , age
//     // return a processed object
//     return { name, age}
// }




// const ahmed = {umi: 'Neju' , age:27}
// const baba = {...ahmed, age: ahmed.age - 4}

// console.log(ahmed);
// console.log(baba);
// ahmed === baba




// function wishMeBirthday(name){console.log (`Happy Birthday ${name}`)}
// wishMeBirthday("Ahmed")
// wishMeBirthday("")

// const birthday = (person) => ({...person, age: person.age + 1})
// const person = {mother: 'Ahmed', age: 31}
// const ahmedAfterBirthday = birthday(person)
// console.log(ahmedAfterBirthday)

// const increaseStock = (product) => ({
//     ...product,
//     quantity: product.quantity + 5,
// })

// const product = {name: 'ruled notebook', quantity: 20}
// const inventoryStock = increaseStock(product)
// console.log(inventoryStock)


// Functional Programming
// **********************

// section 1 :- Immutability 

// const anObj = { name: "ahmed" , age:21}

// const anObjAfterDay = {name:"ahmed" , age:22}

// const anObjAfterDay2 = anObj;

// anObjAfterDay2.age = 32;

// a nObj // {name: "ahmed" , age: 32}

// You don't change (mutate) the data given to you. Make a new copy.


// const anObj = {name: "Ahmed" , age: 21}
// const anObjAfterDay = {name: "Umi" , age: 32}
// const anObjAfterDay2 = anObj;
// anObjAfterDay2.age = 32;
// anObj


// const colors = ['red' , 'Yellow', 'blue' ,'Red','green']
// const moreColors = [...colors, 'pink', 'purple']

// colors === moreColors

// console.log(colors)
// console.log(moreColors)
















































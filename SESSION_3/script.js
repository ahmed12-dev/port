// Functional Programming

// section:1 Immutability 
// example 

// const anObj = {name:"Ahmed", age: 21}
// const anObjAfterDay ={name:"Umi",age: 27}

// const anObjAfterDay1 = anObj;

// anObjAfterDay1.age = 22;

// console.log (anObj)

// if a function have given in put with the same output it is Pure function
// and it is Immutable 


// function wishMeBirthDay(name){console.log(`Happy Birth Day ${name}`)}
// wishMeBirthDay("Ahmed")


// const happyBirthDay = ({name, age}) => ({name,age : age + 1});

// const happyBirthDay2 = person =>({...person, age: person.age + 1 });

// colors = ['red','blue','yellow','orange']
// convertColor = Color => `Color is : ${colors}`

// const colorMessage2 = colors.map(convertColor)

// map is  a function That takes one Element at a time and Index

// const squareNum = num => num * num ;

// // squareNum(2)

// console.log(squareNum(4));

// const square = numbers => numbers.map(squareNum)

// // square([1,2,3,4,5,6])

// console.log(square([1,2,3,4,5,6]));

// const wordLength = word => word.length

// // wordLength("ahmed")

// console.log(wordLength("ahmed"))

// const getLength = words => words.map(wordLength)

// getLength(["ahmed", "is", "good"])

// console.log(getLength(["ahmed", "is", "good"]))



// const thisIsAnArrayOfObject = [{name:"Ahmed"}, {name:"bil"},{name:"Umi"}]

// const extractNameFromObj = obj => obj.name

// extractNameFromObj ({name:"ahmed"})

// x = thisIsAnArrayOfObject.map(extractNameFromObj)

// console.log(x)


// // Filter

// const numbers = [1,3,5,2,22,11,9]

// const isOdd = num => num % 2 != 0

// y = isOdd(3)

// console.log(y)

// //  to use filter, the callback function should return boolean 

// const oddNumberOnly = numbers.filter(isOdd)

// z = oddNumberOnly

// console.log(z)

// const onlyBooleans = numbers.map(isOdd)

// a = onlyBooleans

// console.log(a)
//  a filter will return an array with the values 
// for which the callback function returned true

// const numbers = [5,20,15,40,3,30,11]

// const isDivisileBy10 = num => num % 10 === 0

// c = isDivisileBy10(5)

// b = isDivisileBy10(90)
//  console.log(b )
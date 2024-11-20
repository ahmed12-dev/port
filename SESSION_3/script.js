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


"use strict"

// const person = {
// name: "bob",
// age: 54, 

// talk: function(){
//     console.log(`${person.name} says hello`)
// }
// }


// person.talk();


/****Constructor Function****/

function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMember = true;
  this.talk = function(){
        console.log(`${this.name} says Hello!`);
    };
}
 
const tom = new Person("Tom", "firstname", "age",)
 






/****Factory Function****/
// function createPerson(name, age){
// const person = {
//     name,
//     age: age, 


//     talk: function(){
//         console.log(`${this.name} says Hello!`);
//     }
// }
// return person
// }

// const tom = createPerson("Tom", 99)



/***using jason parse and jason stringify */
const alice = '{"name": "Alice", "age": 30}'
 

const user = JSON.parse(alice);

const car ={
    make: "Toyota",
    model: "Corolla",
    year: 1999,
};

const carString = JSON.stringify(car);


console.log(carString);

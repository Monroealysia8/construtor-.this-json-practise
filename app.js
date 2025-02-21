"use strict"

/*www.gemini.com
will generate jason data for me*/

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





/*Async function*/
async function loadJSONbanana(){
    const response = await fetch("data.json")
    const data = await response.json()

    console.log(data);

}

loadJSONbanana();


/*Arrow and standard Functions*/

subtractNumber(3, 6, 8);
function subtractNumber(num1, num2, num3){
let finalNum = num1 - num2 - num3;
console.log(this);
return finalNum;
}



const subtract = (num1, num2, num3) => {
  console.log(this)
    let finalNum = num1 - num2 - num3;
  return finalNum;
};




/*object with method*/
const person23 = {
    talk:function(){
        console.log(this);
    }

}
/* and object with method using arrow function*/
/* be careful using arrow functions and methods....bc it will show window in the console. thats an error. */
const person24 = {
  talk: () => {
    console.log(this);
  },
};


/*colt stills youtube.video to familiarize yourself with "this"*/
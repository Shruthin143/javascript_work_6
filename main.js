/*
console.log("Hello world")
console.error("this is an error")
*/

// Var, const, let

/*let age = 30
console.log(age);
age = 31
console.log(age);
*/

/*const age = 30
console.log(age);
age = 32
console.log(age);
*/

// String, Numbers, Boolean, Null, defined

/*
const name = 'Jon';
const age = 29
const rating = 4.5
const isCool = true
const x = null;
const y = undefined;
let z;

console.log(typeof name)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
*/

//String Concatenation
/*
const name= 'shr'
const age = 29
console.log('my name is' + name + 'and age is ' + age)
console.log(`My name is ${name} and age ${age}`) 
const hello = `My name is ${name} and age ${age}`
console.log(hello)
*/

// lenght of a string
/*
const h = 'hello world'
console.log(h.length)
console.log(h.toUpperCase())
console.log(h.toLowerCase())
console.log(h.substring(0,5).toUpperCase())
console.log(h.split(''))
m=h.split(', ')
console.log(m)
*/

// Arrays 
/*
const fruits= [1,2,3,4, 'name', 'age'];
console.log(fruits[0])
fruits[3] = 'wish'
console.log(fruits)
fruits.push('mangoes')
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log(fruits.indexOf('age'))
*/

// Object literals
/*
const person = {
    firstname: "Shr",
    lastname: "tinku",
    age: 25,
    hobbies:  ['a','b','c','d'],
    address: {
        street: 'e',
        city: 'f',
        state:'g'
    }
}

console.log(person.firstname)
console.log(person.hobbies[0])
console.log(person.address.street)
const {firstname, lastname} = person //pulling those from person
person.email= 'john@gmail.com'
console.log(person)
*/

// Arrays of Objects

/*sconst todo=[
    {
        Id: 1,
        city: 'f',
        Country:'India'
    },
    {
        Id: 2,
        city: 'f',
        Country:'Pakistan'
    },
    {
        Id: 3,
        city: 'f',
        Country:'Bangladesh'
    }
]
console.log(todo)
console.log(todo[1].city)

// Converting the above to JSON (for sending to server)
const todoJSON = JSON.stringify(todo)
console.log(todoJSON)
*/


//LOOPS 
//FOR & While
/* for(let i=0; i < 10; i++) {
    console.log(i);
}

for(let todo of todo){
    console.log(todo.country) // looping through Array
}
let i=0;
while(i<10){
    console.log(`while loop number: ${i}`)
    i++
}

//forEach, map, filter
todo.forEach(function(todo){
    console.log(todo.country); //forEach
})

const todoCountry= todo.map(function(todo){
    return todo.country; //map
})
console.log();

const todofil= todo.filter(function(todo){
    return todo.Country === 'India'  //filter
})
console.log(todofil)
*/


// CONDITIONS
// == checks only value, === checks value and datatype

/*
const x = '10'
if(x==10){
    console.log('x is 10');
}

const y = '10'
if(y===10){
    console.log('x is 10');
}
else{
    console.log('y is not 10')
}
*/

//TERNIARY operator
/*
const x=10;
const color = x > 10 ? 'red': 'blue'
console.log(color)

switch (color){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is nothing')
        break;
}
*/

//FUNCTIONS

/*function addnums(num1, num2){
    return(num1+num2);
}

console.log(addnums(5,4))
*/

//ARROW functions
/*const addnums = (num1 = 1, num2 =2) => console.log(num1 + num2);

addnums(5,4)
*/

// Object oriented conecpts

/*
function Person(fName, lName, dob){
    this.fName = fName;
    this.lName = lName;
    this.dob = new Date(dob); 
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.fName} ${this.lName}`;
    }
}

Person.prototype.getBY = function(){
    return this.dob.getFullYear();  //Prototype can be used to eliminate lines 215 to 217
}

Person.prototype.getFN = function(){
    return `${this.fName} ${this.lName}`;
}

const person1= new Person('a','b','4-3-1980');
const person2 = new Person('c','d','3-6-1970');

console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear())
console.log(person1.getFullName())
*/

// CLASS to perform the same function as above

/*
class Person{
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthyear(){
        return this.dob.getFullYear();
    }

    getFullname(){
        return `${this.firstname} ${this.lastname}`
    }
}

*/

// // Start of work with HTML page
// //console.log(window) // window oject is the parent object of the browser
// //Single element selectors

//console.log(document.getElementById('my-form'))
// const form= document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('.container'))
// console.log(document.querySelector('h1'))


// console.log(document.querySelector('h1'))

// //Multiple element
//  console.log(document.querySelectorAll('.item'));

//  console.log(document.getElementsByClassName('item'));
//  console.log(document.getElementsByTagName('li'));

//Looping through
// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item));

//Chaning user interface
//const ul = document.querySelector('.items')
//ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// const btn = document.querySelector('.btn')
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     //console.log(e)
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList  = document.querySelector('#users');
myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    //console.log(nameInput.value)
    if(nameInput.value === ''|| emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(),3000)

    } else {
        //console.log('success');
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        nameInput.value = '';
        emailInput.value = '';
    }
}
// console.log("Halla");

// run();

// // Hoisting -> It a process of moving function decleration to the top of file and this is done automaticall by the js engine

// //Function Decleration
// function run() {
//     console.log("Running");
// }

// // // function call
// // run();


//Types of Function Assignment

// stand(); -> In function assignment we cannot make the function call above the function

// //1) Named function assignment

// let stand = function walk() {
//     console.log("Shoes");
// }

// // stand();
// // walk(); -> Since the function walk() is assigned to a variable stand so on calling walk() function it will not execute

// let jump = stand;
// jump();

//2) Anonymous function assignment

// let stand2 = function() {
//     console.log("Socks");
// }

// stand2();


// let x = 1;
// x = 'a';
// console.log(x);



// function sum(a,b) {
//     return a + b;
// }

// // console.log(sum(1, 2));
// // console.log(sum(1));
// // console.log(sum());
// console.log(sum(1, 2, 3, 4, 5));


// function sum() {                               
//     console.log(arguments);     //It is a dynamic sort of function where we can pass as many numbers and it will return the total sum of them
//     let total = 0;
//     for(let val of arguments) {      //argument is an oject
//         total = total + val;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5));



// function sum(val, num, ...args) {        //...args -> itis called rest operator, it converts the parameters into array
//     console.log(args);
// }

// sum(1, 2, 3, 4, 5);



// // Default Parameters

// function intrest(p, r=6, y=10) {
//     return p * r * y / 100;
// }

// console.log(intrest(10000));



// // Getter & Setter

//         // getter -> access the property
//         // setter -> modifies the propert

// let person = {
//     fname: 'Rahul',
//     lname: 'Kumar',
//     get fullname() {
//         // return person.fname +' '+ person.lname;      
//         return `${person.fname} ${person.lname}`;   
//     },
//     set fullname(value) {
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// };

// console.log(person);

// person.fullname = 'Ajay Devgun';
// console.log(person.fullname);
// console.log(person);



// //Try and Catch


// let person = {
//     fname: 'Rahul',
//     lname: 'Kumar',
//     get fullname() {
//         // return person.fname +' '+ person.lname;      
//         return `${this.fname} ${this.lname}`;   
//     },
//     set fullname(value) {
//         if(typeof value !== 'string') {
//             throw new Error('Not a valid input');
//         }
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// };

// try {
//     person.fullname = 'Tenzing Norway';
// }
// catch (e) {
//     alert(e);
// }


// console.log(person.fullname);


// Scoop

// for(var i = 0; i <= 10; i++) {
                                                //This will run because var is ablicible out of the scope
// }
// console.log(i);


// for(let i = 0; i <= 10; i++) {
//                                             //This will not run because let is not ablicible out of the scope
// }
// console.log(i);


// if(true) {
//     var a = 5;
// }
// console.log(a);


// if(true) {
//     let a = 5;
// }
// console.log(a);


// function a() {
//     const ab = 5;
// }


// const ab = 5;

// function b() {
//     const ab = 5;
// }



// Reducing an Array

// let arr = [1,2,3,4];
// let total = 0;

// for(let value of arr) {
//     total = total + value;
// }

// console.log(total);



let arr = [1,2,3,4];

let sum = arr.reduce((accumulator, currentValue) => currentValue + accumulator, 0);

console.log("The sum is: ", sum);

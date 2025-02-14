//String -> In JS a string can be represented in primitive and object form

//  let str = "Hello";
// console.log(typeof str);     //primitive type string

// //str. -> if we use dot operator in primitive type string the JS automatically converts that primitive type stringh into object type string

// let strObj = new String("World");
// console.log(typeof strObj);         //object type string

// let message = 'This is a JS practice course';
// console.log(message);
// let words = message.split(' ');
// console.log(words);
// console.log(message.replace('JS', 'C++'));


// //Template Literal -> (` `)
// let message = 
// `Hello ${str},

// Thanks for the opportunity

// Best Regards,
// Priyanksu`;

// console.log(message);

//Date & Time

// let date = new Date();
// console.log(date);

// let date2 = new Date('March 28 2002 08:00');
// console.log(date2);

// let date3 = new Date(2002, 1, 28, 8);
// console.log(date3);
// date3.setFullYear(1901);
// // date3.getDate(date3);
// console.log(date3);


//Array -> In JS we can store different data types in an array

// let numbers = [1, 2, 3, 4];
// console.log(numbers);

// let a = numbers.push(9);      //insertion in end
// console.log(a);
// console.log(numbers);

// let b = numbers.unshift(5);   //insertion in begning
// console.log(b);
// console.log(numbers);

// // let c = numbers.splice(3, 0, 'a', 'b', 'c', 'd');
// let c = numbers.splice(3, 2, 'a', 'b', 'c', 'd');       //insertion in the middle
// console.log(c);
// console.log(numbers);

//searching in Array

// console.log(numbers.indexOf(3));     //-> 1st Method

// if(numbers.indexOf(2) != -1) {       //-> 2nd Method
//     console.log("Present");
// }

// console.log(numbers.includes(8));       //-> 3rd Method

// console.log(numbers.indexOf(1, 2));     //-> 4th Mehod

//Arrow Function
//E_x_a_m_p_l_e 1
  
// const greet = (count) => {
//     for(let i = 0; i <= count; i++) {
//         console.log("Hello World");
//     }
// };

// greet(3);

// //E_x_a_m_p_l_e 2
// const Happy = (num) =>  num*num;

// console.log(Happy(3));

// //E_x_a_m_p_l_e 3
// const Happy1 = (num) => {
//    return num*num;
// }
// console.log(Happy1(3));

//Callback is a function passed as an argument to another function

// const Calculate = (a, b, operation) => {
//     return operation(a, b);
// };

// //Method 1
// const add = Calculate(3, 4, function(n1, n2) {
//     return n1 + n2;
// });
// console.log(add);

// //Method 2
// const sub = (a, b) => a-b;
// const Subtract = Calculate(8, 5, sub);
// console.log(Subtract);


// //Method 3
// function multiply(a, b) {
//     return a * b;
// }
// const Mult = Calculate(5, 2, multiply);
// console.log(Mult);



// let courses = [
//     {no:1, name:'priya'},
//     {no:2, name:'rahul'}
// ];

// console.log(courses);


//Method 1
// const course = (course) => {
//     return course.name == "rahul";
// };

// const result = courses.find(course);
// console.log(result);


// //Method 2
// let course = courses.find(course => course.name === "rahul");
// console.log(course);


// //Method 3
// let course = courses.find(function(course)
//     {
//         return course.name === "rahul";
//     }
// )
// console.log(course);


//Element Removal

// let num = [1, 2, 3, 4, 5, 6, 7];

// num.pop();            //from end
// console.log(num);

// num.shift();          //from begning
// console.log(num);

// num.splice(3, 1);     //from middle
// console.log(num);


// Emptyness in an Array

// let num = [1, 2, 3, 4, 5];     //Method 1
// num = [];
// console.log(num);

// let num = [1, 2, 3, 4, 5];
// let num2 = num;
// num = [];
// console.log(num);
// console.log(num2);

// this is a problem

// let num = [1, 2, 3, 4, 5];        //Method 2
// let num2 = num;
// num.length = 0;
// console.log(num);
// console.log(num2);

// let num = [1, 2, 3, 4, 5];        //Method 3
// let num2 = num;
// num.splice(0, num.length);
// console.log(num);
// console.log(num2);

// let num = [1, 2, 3, 4, 5];           //Method 4
// while(num.length > 0) {
//     num.pop();
// }
// console.log(num);



// combining and slicing arrays

// let first = [1, 2, 3, 4];
// let second = [5, 6, 7];

// let combine = first.concat(second);     //combine
// console.log(combine);
// console.log(combine);



// let marks = [10, 20, 30, 40, 50, 60, 70, 80];
// // let Sl = marks.slice(3, 6);                    //slice
// // let Sl = marks.slice(3);
// let Sl = marks.slice();
// console.log(Sl);



// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let abc = {
//     d: 40,
//     e: 50,
//     f: 60
// };                                                  //combining objects

// const combine = {...src, ...abc};
// console.log(combine);

// let {c, d, e} = combine;
// // let {c} = combine;
// console.log({c, d, e});


//Iteration in an array

// let numbers = [1, 2, 3, 4, 5];

// for(let value of numbers) {  //for-of loop
//     console.log(value);
// }

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(numb) {    //forEach loop               //normal callback function
//     console.log(numb);
// });

// numbers.forEach(numb => console.log(numb));     //callback function using arraw function



// // Join Array
// let numbers = [1, 2, 3, 4, 5];
// let joined = numbers.join(',');
// console.log(joined);

// //Split Array
// let message = "This is myself from here";
// let parts = message.split(' ');
// console.log(parts);
// let combine = parts.join('_');
// console.log(combine);


//Sorting in Array
// let numbers = [40, 20, 50, 10, 30];
// let sorted = numbers.sort();
// console.log(sorted);
// let rev = numbers.reverse();
// console.log(rev);

// let array = [
//     {name: 'Priya', age: 25},
//     {name: 'Rahul',  age: 20},
//     {name: 'Rahul',  age: 30},              //Sorting using array of objects
// ];

// array.sort(function(a, b) {
//     return a.age - b.age;
// });
// console.log(array);


// //Filtering Array

// let arr = [1, 2, -1, -4];
// let filtered = arr.filter(function(value) {
//     return value >= 0;
// });
// // let filtered = arr.filter(value => value < 0);    //using arrow function
// console.log(filtered);

// // Mapping Array -> Mapps each element of array to something else
// let arr = [10,20,30,40];
// let mapped = arr.map(function(value) {
//     return 'student marks' + value;
// });
// // let mapped = arr.map(value => 'student marks' + value);   //Arrow function
// console.log(mapped);

// //Mapping with Objects
// let arr = [1,2,-1,-4];

// let filtered = arr.filter(value => value >= 0);
// console.log(filtered);

// let numbers = filtered.map(num => ({value: num}));
// console.log(numbers);


//Chaining
let arr = [1,2,-1,-4];
let numbers = arr.filter(value => value >= 0) .map(num => ({value: num}));
console.log(numbers);

//object creation

// let rectangle = {
//     length: 2,         //properties
//     breadth: 4,       //properties

//     draw : function() {
//         console.log("drawing rectangle");      //method
//     }
// };
// rectangle.draw();

//let a = 1;

//let b = {};

// let c = {
//     value : 1
// };

// let d = {
//     l: 1,
//     b: 2
// };

// let e = {
//     g: 1,
//     h: 2,

//     drawing : function () {
//        let i = 8;
//        console.log(i);
//     }
// };

// e.drawing();

//factory function follows camelcase -> first letter can be capital or small

// function createRectangle(len, bre) {

//     return rectangle = {
//         length: len,         //properties
//         breadth: bre,       //properties
    
//         draw : function() {
//             console.log("drawing rectangle");      //method
//         }
//     };
// }

// let obj1 = createRectangle(5, 4);
// let obj2 = createRectangle(3, 2);
// let obj3 = createRectangle(1, 9);

// obj1.length;

//constructor function intialise or defines properties or methods
//it follows pascal notations -> first letter of every word is capital
// function CreateRectangle(len, bre) {
//     this.length = len;                   //this refers to the current object that we are working on
//     this.breadth = bre;                  //if the constructor function is empty then is refers to empty object 
//     this.draw = function() {
//         console.log("Drawing rectangle");
//     }
// }

// let obj = new CreateRectangle();    //new is a keyword that returns an empty object
// obj.length;
// obj.draw();
// //obj.draw;
// console.log(obj);
// obj.color = 'yellow';
// console.log(obj);
// delete obj.color;
// console.log(obj);

// let obj2 = new Function('length', 'breadth', 
//     `this.length = len;                   
//     this.breadth = bre;                   
//     this.draw = function() {
//         console.log("Drawing rectangle");
//     }`);
// let obj3 = new CreateRectangle(2, 3);
// console.log(obj3);

// let a = 10;
// function inc(a) {
//     a++;                   //premetive type -> copied by their value
// }
// inc(a);
// console.log(a);

// let a = {value: 10};
// function inc(a)
// {                          //reference type -> copied by their address
//     a.value++;
// }
// inc(a);
// console.log(a.value);


// let rectangle = {
//     length: 2,
//     breadth: 4
// };

// //for-in loop -> it is applied in objects
// for(let key in rectangle) {
//     //keys are reflected through key variables
//     //values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }

// //for-of loop -> it is applied in iterables(array,maps)
// for(let key of Object.entries(rectangle)) {              //Object.keys(rectangle) -> prints the key
//     console.log(key);                                    //Object.entries(rectangle) -> prints the key and value pair
// }

// if('length' in rectangle) {
//     console.log("Present");
// }
// else {
//     console.log("Abscent");
// }

//Oject clonning

//1) Iteration
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {};
// for(let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);


//2) Assign
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let src2 = {d: 40};
// let dest = Object.assign({}, src);
// console.log(dest);

// src.a++;
// console.log(dest);


//3) Spread
let src = {
    a: 10,
    b: 20,
    c: 30
};
let dest = {...src};
console.log(dest);

src.a++;
console.log(dest);
console.log(src);




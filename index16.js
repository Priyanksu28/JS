// function multipleBy5(num) {
//     return num * 5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createuser(name, score) {
    this.name = name
    this.score = score
}

createuser.prototype.print = function() {
    console.log(`Score is ${this.score++}`);

}

const chai = new createuser("chai", 25);
const tea = createuser("tea", 250);

chai.print();
console.log(createuser.prototype);

// ✅Here, myHeros is a JavaScript array that stores "thor" and "spiderman".
// ✅ Arrays in JavaScript are objects that inherit from Array.prototype.
let myHeros = ["thor", "spiderman"];

// ✅ heroPower is a plain JavaScript object with:
// Two properties:
// thor: "hammer"
// spiderman: "sling"
// A method getSpiderPower() that prints Spider-Man’s power.
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// ✅ Object.prototype is the base prototype for all objects in JavaScript.
// ✅ By adding hitesh() to Object.prototype, every object in JavaScript (including arrays, functions, and other objects) can now access this method.
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};


Array.prototype.heyHitesh = function() {
    console.log("Hitesh is here");
    
}

// heroPower.hitesh();
// myHeros.hitesh();

// myHeros.heyHitesh();
// heroPower.heyHitesh();


// Before Adding hitesh():

//     heroPower  --->  Object.prototype  --->  null
//     myHeros    --->  Array.prototype  --->  Object.prototype  --->  null


// After Adding hitesh():

//     Object.prototype.hitesh() is now accessible to EVERY object.

//     heroPower.hitesh()   // Found in Object.prototype ✅
//     myHeros.hitesh()     // Not found in Array.prototype, but found in Object.prototype ✅



// let userNmae = "Chai aur Code    ";

// String.prototype.trueLength = function() {
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// userNmae.trueLength();
// "   Rajesh".trueLength();
// "   Rajesh".trueLength();

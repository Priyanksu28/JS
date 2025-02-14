// function setUser(userNmae) {
//     this.userNmae = userNmae
//     console.log("called");
    
// }

// function createUser(userNmae, password, email) {
//     setUser.call(this, userNmae)
//     this.password = password
//     this.email = email
// }

// let chai = new createUser("chai", "123", "chai@gmail.com")
// console.log(chai);



class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

Student.prototype.study = function() {
    console.log(this.name + " is studying!");
}

let student1 = new Student("John", "A");
console.log(student1.name);  
student1.study();  
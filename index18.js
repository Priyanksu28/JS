// class User {
//     constructor(name) {
//         this.name = name
//     }

//     login() {
//         console.log(`Username is ${this.name}`);
//     }
// }

// class Teacher extends User{
//     constructor(name, email, password) {
//         super(name)
//         this.email = email
//         this.password = password
//     }

//     addSubject() {
//         console.log(`Subject is added by ${this.name}`)
//     }
// }

// const Teach = new Teacher("Manoj", "manoj@gmail.com", "12345")
// Teach.addSubject()

// const Student = new User("Rajesh")
// Student.login()

// // console.log(Teach instanceof Student);    ❌ instanceof cannot be used to compare an object against another object.

// console.log(Teach instanceof Teacher); 
// console.log(Teach instanceof User);          //✅ instanceof should be used to compare an object against a class (constructor function).
// console.log(Student instanceof User);  
// console.log(Student instanceof Teacher);  
// console.log(Teacher instanceof User);
// console.log(User instanceof Teacher);

// Static Property


class User {
    constructor(name) {
        this.name = name
    }

    static createId() {
        return '123';
    }
}

// const Hitesh = new User("Hitesh")
// console.log(Hitesh.createId());

class Teacher extends User {
    constructor(name, email) {
        super(name)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@gmail.com")
console.log(iPhone.createId());


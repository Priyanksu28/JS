//function house(city, apartment, rent) {  //Constructor Function ==> This is an old way of creating an object using constructor 
//   this.city = city                       //function in JS when their was no concept of class
//   this.apartment = apartment
//   this.rent = rent
// }

// var Home1 = new house('Delhi', 'Spring', 20000)
// var Home2 = new house('Mumbai', 'Spanish Garden', 15000)
// var Home3 = new house('Guwahati', 'Gokuldham', 30000)

class house {
  constructor(city, apartment, rent) {
    this.city = city                       //function in JS when their was no concept of class
    this.apartment = apartment
    this.rent = rent
  }
}

var Home1 = new house('Delhi', 'Spring', 20000)
var Home2 = new house('Mumbai', 'Spanish Garden', 15000)
var Home3 = new house('Guwahati', 'Gokuldham', 30000)


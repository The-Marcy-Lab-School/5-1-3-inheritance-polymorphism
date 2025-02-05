class Person {
  #friends = [];
  constructor(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    // return this
  }
  makeFriend(friend) {
    this.#friends.push(friend);
    console.log(`hello ${friend}, my name is ${this.name}`);
  }
  listFriends() {
    this.#friends.forEach(friend => console.log(friend));
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

// The extends keyword allows Programmer to inherit
// everything from the Person class
class Programmer extends Person {
  // method overriding
  constructor(name, age, programmingLanguage) {
    // super invokes the superclass constructor
    super(name, age);
    this.programmingLanguage = programmingLanguage;
  }
  // method overriding
  doActivity(activity) {
    super.doActivity(`${activity} in a office chair`);
  }
  code() {
    // invoking the Person version of doActivity
    super.doActivity(`writing some ${this.programmingLanguage}`)
    // invoking the Programmer version of doActivity
    this.doActivity(`writing some ${this.programmingLanguage}`)
  }
}

const ben = new Programmer('ben', 29, 'javascript');
ben.doActivity('backflipping');
ben.makeFriend('gonzalo');
ben.makeFriend('carmen');
ben.makeFriend('motun');
ben.makeFriend('christie');
ben.listFriends();
ben.code();
console.log(ben instanceof Person)
console.log(ben instanceof Programmer)
console.log(ben);

////////////////////
// A Classic Example
////////////////////

class User {
  /* A user has:
  username
  password
  email
  id

  A user can:
  login
  logout
  post
  addFriend
  */
}

class Admin extends User {
  /* 
  An admin can also
  - deleteUser
  - updateUser
  */
}


///////////////////
// Another Example
///////////////////

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Shoe extends Product {
  constructor(name, price) {
    super(name, price, 'shoe')
  }
}

class Shirt extends Product {
  constructor(name, price) {
    super(name, price, 'shirt')
  }
}

// If I use the Product class, I have to specify that it is a 'shoe'
const airForce = new Product('airforce', 150, 'shoe');

// With the Shoe class, it is baked into the Shoe constructor
const airMax = new Shoe('airmax', 100);
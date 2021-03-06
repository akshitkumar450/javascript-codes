///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    // Instance properties
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this! (performance is not good)
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

// methods which are only available on the function constructor
// objects created with that are cant access to this method
// it is not on the prototype
Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
};
Person.hey();
const jonas = new Person('Jonas', 1991);
// jonas.hey() //error
// console.log(jonas);

// 1. New  empty {} is created
// 2. function is called, this is set the empty {}
// 3. empty {} is linked to prototype
// 4. function automatically return {} which is not empty now

const matilda = new Person('Matilda', 2017);
// console.log(matilda);
const jack = new Person('Jack', 1975);
// console.log(jack);

// console.log(jonas instanceof Person);

////////////////////////////////////////////////
// Prototypes

// console.log(Person.prototype);
// setting the calAge function in Person prototype
// only  one copy of this calAge fn exsits but all the objects created by the Person contructor function can use it
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

// object created by the Person constructor function has access to the property or methods defined in Person prototype

// any object has access to methods and properties from its prototype

// jonas.calcAge()
// matilda.calcAge()

// function has prototype property
// console.log(Person);

// console.log(jonas);
// object has __proto__
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// setting the property on the Person prototype
// and all the object created by Person consrtuctor function can access that property

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species'));
// false


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor); //Person constructor function

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

// Instance methods
// Methods will be added to .prototype property
// calcAge() {
//     console.log(2037 - this.birthYear);
// }

// greet() {
//     console.log(`Hey ${this.fullName}`);
// }

// get age() {
//     return 2037 - this.birthYear;
// }

// Set a property that already exists
// set fullName(name) {
//     if (name.includes(' '))
//         this._fullName = name;
//     else
//         alert(`${name} is not a full name!`);
// }

// get fullName() {
//     return this._fullName;
// }
// Static method
// these methods are not available on the objects created by this class
// they are only available on the class
//     static hey() {
//         console.log('Hey there 👋');
//         console.log(this);
//     }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// static methods are on the class only
// objects created from class can not use it
// jessica.hey() //error
// console.log(jessica.__proto__ === PersonCl.prototype);

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode



// Setters and Getters in object
// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },
// };

// dont call it
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);


///////////////////////////////////////
// Object.create
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();



///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// parent class
const Person1 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
// child class
const Student = function (firstName, birthYear, course) {
    Person1.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
// setting up the prototype chain
// child class inherting from parent class
// should be always before any methods is attached to child class
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__); //Student
console.log(mike.__proto__.__proto__); //Person

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

// important to do this
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);



///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

// Parent class
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
    }
}

// Child class 
// if in the child class we don't have any extra parameters and all the parameters are same as in parent class ..so in that case we dont need to have constructor or super methods in the child class.
// it will automatically call contructor of parent class 
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    // overwriting the method declared in parent class
    // it will used bcz it will finded first in the prototype chain
    calcAge() {
        console.log(
            `I'm ${2037 - this.birthYear
            } years old, but as a student I feel more like ${2037 - this.birthYear + 10
            }`
        );
    }
    // overwriting the parent class function
    greet() {
        console.log('this is the new greet function');
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.greet()


//////////////////////////////////////////////////
// Class example

class Account {
    // public field (instances)
    locale = navigator.language;

    // private fields (instances)
    // private fields cant be used outside the class

    #movements = [];
    // making this field as private and setting it in constructor with incoming pin value
    #pin;

    // static fields
    static balance = 4500;

    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        this.#pin = pin
        // protected field
        // this._movements = []
    }

    // we can access private fields inside the class
    showPrivateFields() {
        console.log(this.#movements, this.#pin);
    }

    // all public methods
    getMovements() {
        // this will point to current object/class (Account)
        console.log(this);
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val)
        return this;
    }
    withdraw(val) {
        this.deposit(-val)
        return this;
    }

    // private methods not accessible outside the class but can use inside the class
    #approveLoan(val) {
        return true
    }

    requestLoan(val) {
        if (this.#approveLoan) {
            this.deposit(val)
            console.log('load requested');
            return this;
        }
    }

    static helper1() {
        console.log('help1');
    }
    // static methods can use only static field
    // it cant access properties and methods that are not static
    static helper() {
        //error bcz it is not a static method
        // console.log(this.getMovements()) 

        // this will work as it is a static method can be used inside other static method

        this.helper1()
        console.log(' static helper ', this.balance);
    }
}
// some methods and properties should not be allowed to accessed directly
const acc1 = new Account('jonas', 'inr', 9211)
acc1.deposit(150)
acc1.deposit(1500)
acc1.withdraw(100)
acc1.requestLoan(1200)
acc1.showPrivateFields()
console.log(acc1.getMovements());

Account.helper()
// not works as it is a static method that works only on class ,,not on objects created by class
// acc1.helper()

// not accessile as it private fields
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(15));


// Chaining
// to chain methods we need to return the current object or this so that we can chain methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

// static fields are used only by class itself
console.log(Account.balance);
// cant be used on the object created by class
// console.log(acc1.balance);
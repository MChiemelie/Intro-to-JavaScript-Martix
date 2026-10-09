// DATA TYPES (PRIMITIVES)
const name = "Anthony"; // string
const age = 18; // number
const student = true; //boolean
const occupation = undefined; // undefined
const car = null; // null

// DATA STRUCTURES (REFRENCES)
const equipments = ['Laptop', 'Phone', 'Charger', 'Book']
const laptop = {
  name: 'HP Windows 10 pro',
  ageYears: 5,
  on: true,
  graphics_card: undefined,
  favorite_specs: ['processor', 'storage'],
  drivers: ['display and graphics', 'audio'],
  display_res: '1366 x 768',
  battery_percentage: 100,
  
  playGame: function() {
    console.log('Playing Titanfall');
}

}; // object

laptop.playGame();
console.log(equipments)

// manpulating arrays
const fruits = ['mango', 'apple', 'orange', 'banana']

console.log(fruits[2])

const course = {
  name: "Frontend Web Dev",
  numberOfStudents: 12,
  active: true,
  students: ["Rosemary", "Jessica", "Somtoo", "Ginika", "John", "Clint", "Machi", "Desire", "Kene", "Michael", "Anthony", "Dex"],
  tutor: {
    name: "Chiemelie",
    age: 15,
  }
};

function sayhello() {
  console.log('Hello, World')
}

sayhello()

function newBalance(oldBalance = 0, spent = 0) {
  const balance = oldBalance - spent;

  return (balance);
}

const balance = newBalance(10000, 2000);

console.log(balance);

const person = {
  name: "David",
  age: 27,
  beards: false,
  friends: ['Adama', 'Gift', 'Chidimma'],
  car: {
    name: 'Lexus 360',
    age: 2
  },
  greet: function () {
    return "Hello, I am David";
  },
  write: function () {
    return '🚗';
  }
};

console.log()
person.greet()

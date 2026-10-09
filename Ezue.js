// Primitives
const name = 'Ezue'; //string
const age = "22"; // number
const married = false; //boolean
const lover = undefined;// undefined
const chamber = null;//null

// References
const friends = ["jon"]; //array
const laptop = {
  name: 'DESKTOP-7NJG6KQ',
  agemonths: 1,
  on: true,
  display: "size",
  favouriteSpecs: ["graphics"],
  drivers:{
    display:"intel(R) UHD Graphicss",
    battery: "Microsoft AC Adapter",
  },
}; //objects

console.log(laptop);



function sayHello() {
  console.log("Hello World!")
}

// sayHello()

function newBalance(oldBalance = 0,spent = 0) {
  const balance = oldBalance -spent;

  return balance;

  console.log(balance);
  
}

newBalance(10000 - 2000);

const person ={
  name: "David",
  age:27,
  beards: false,
  friends: ['Adanna','Gift','Chidimaa'],
  car: {
    name:'2026 Dodge Durango',
    age:2
  },
  greet: function () {
    return "Hello,I am David";
  },
  write: function () {
    return "write";
  },
}

console.log()
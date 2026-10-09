// DATA TYPES (PRIMITIVES)
const string = "abcd12345 {}[]|\\:\<>,.?/~`"; // string
const number = 123; // number
const boolean = true || false; //boolean
const unDefined = undefined; // undefined
const nullish = null; // null

// DATA STRUCTURES (REFRENCES)
const scores = [34, 45, 68, 25]; //array
const student = {
	name: 'Somtoo',
	age: '20',
	married: false,
	friends: ['RoseMary', 'Jessica', 'Ginika'],
	laptop: {
		name: 'HP Probook',
	},
	water: undefined
}

//console.log(student)

function addNumbers(firstNumber = 4, secondNumber = 5) {
	console.log(firstNumber + secondNumber);
}

//addNumbers()

function sayHello() {
	console.log("Hello, World");
}

//sayHello();

function newBalance(oldBalance = 0, spent = 0) {
	const balance = oldBalance - spent;

     return balance;}

newBalance(10000, 2000);

	const person = {
		name: "David",
		age: 27,
		beards: false,
		friends: ['Adanna', 'Gift', 'Chidinma'],
		car: {
			name: 'Lexus 360',
			age: 2
		},
		greet: function () {
			return 'Hello, I am David';
		},
		write: function() {
			return 'Wagwan'
		},
		play: function() {
			return 'FM 26'
		}
	};

	const you = person.play()
	console.log(you)


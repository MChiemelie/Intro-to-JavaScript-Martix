// Primitives
const name = "Jessica"; // string
const age = 18; // number
const married = false; // boolean
const lover = undefined; // undefined
const degree = null; // null

//Reference
const friends = ["RoseMary","Somto","Ginika","Desire"]; // array
const laptop = {
    name: "casey",
    agemonths: 12,
    games: true,
    on: true,
    display: undefined,
    favouritespecs: ["screen touch","foldable"],
    drivers:{
        display:"Intel(R) UDH Graphics",
        battery:"Microsoft AC Adapter",
    },
    games: function(){
        return "I love playing games";
    }
}; //object

 const laptopFeature = laptop.games();
 console.log(laptopFeature);

//manipulating arrays
const foods =["rice","indomie","egusi", "abacha", "plantain","amala and ewedu"]
console.log(foods[4]) //Bracket Notation

function sayHello() {
    console.log("Hello, my name is Jessica");
    
}
    sayHello(); 

function newBalance(oldBalance = 0, spent = 0){
    const balance = oldBalance + spent;

    return balance
}
const balance = newBalance(5000, 2000);
console.log(balance);
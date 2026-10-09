// primitives
const name = 'somto';
const age = 20;
const student = true;
const lover = undefined;
const degree = null;
const nameOfSchool = "Nnamdi Azikiwe University, Awka";

//references
const friends = ['RoseMary', 'Jessica', 'Ginika'];
const laptop = {
    name: 'desktop-hdeloa6',
    ageMonths: 11,
    on: true || false,
    display: undefined,
    favouriteSpecs: ["long-lasting battery", "fast processor"],
    drivers: {
        display: "Intel(R) HD Graphics 4600",
        battery: "microsoft AC adapter",
    },
    powerOn: function() {
        return "powering on...";
},
powerOff: function() {
    return "powering off...";
},
}; //object

const canPoweron = laptop.powerOn();

console.log(canPoweron);


console.log(name, typeof name);
console.log(age, typeof age);
console.log(student, typeof student);
console.log(lover, typeof lover);
console.log(degree, typeof degree);
console.log(nameOfSchool, typeof nameOfSchool);
console.log(friends, typeof friends);
console.log(laptop, typeof laptop);

// manipulating arrays
const colors = ["red", "green", "yellow", "blue", "orange"];
const scores = [30, 80, 60, 20, 50,];

console.log(scores[3])
 
function updateScore(currentScore = 0, pointsEarned= 0) {
    const newScore = currentScore + pointsEarned;
    return newScore;
}

const newScore = updateScore(1500,250);

console.log(newScore);
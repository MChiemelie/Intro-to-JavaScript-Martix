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
}; //object

console.log(name, typeof name);
console.log(age, typeof age);
console.log(student, typeof student);
console.log(lover, typeof lover);
console.log(degree, typeof degree);
console.log(nameOfSchool, typeof nameOfSchool);
console.log(friends, typeof friends);
console.log(laptop, typeof laptop);
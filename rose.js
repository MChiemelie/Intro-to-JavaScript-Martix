// primitives
const name= "rosemary";
const age=20; // number
const student= true; // boolean
const lover= undefined;// undefined
const degree= null;//null
const nameOfschool= "Nnamdi Azikwe University, Awka";

//Reference
const friends= ["somto","cassy","Ginika"];
const laptop= {
    name: "Desktop-pA954H5",
    agemonths: 12,
    on:true,
    display: null,
    favouritespecs:["long-lasting battery"],
drivers: {
    display: "intel(R) UHD Graphics 600",
    battery: "microsoft AC Adapter"},
games: function(){
    return"I love playing gamees on my laptopp,watching moviesand listening to music";

}

};//object
const gameDescription = laptop.games();
console.log(gameDescription);
console.log(name, typeof name);
console.log(age,typeof age);
console.log(student,typeof student);
console.log(lover,typeof lover);
console.log(degree,typeof degree);
console.log(nameOfschool,typeof nameOfschool);
console.log(friends,typeof friends);
console.log(laptop,typeof laptop);

// manipulating arreys
const fruits=["mango","apple","orange","banana"];
const scores=[34,45,60,98,10,'blue'];

console.log(scores[5]);

const courses=['ift211', 'ift222', 'ift206', 'ift202','ins202'];
console.log(courses[2]);



function newblance(oldbalance,spent){
    const balance=oldbalance-spent;
    return balance;

    
}
  const balance=newblance(10000, 1000);

   console.log(balance);
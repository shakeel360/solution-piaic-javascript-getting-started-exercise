/*

Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 

• Modify your program to print a statement about each animal, such as A dog would make a great pet. 

• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!


*/

let animals = ["Lion","Wolf","Hyena"];

console.log();// add empty line in terminal
// PART 01 - Print Out All Animals
for(let i of animals){
    console.log(i);
}
console.log();// add empty line in terminal

for(let i of animals){
    console.log(i + " is a Carnivores Animals");
}

console.log("\nThese all animals are not suitable for pet," +
"however some people do pet them, but they are dangerous aniamals");
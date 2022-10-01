let invitation_list = [
    "Snoop Dogg",
    "Bugs Bunny", 
    "Alien George"
]

for(let i of invitation_list){
    console.log(i + ", You are invited to the Dinner Party \"Sassy Party\"");
}

console.log("\nOh, " + invitation_list[2] + " can't make it to party due to high prices of fuels. UFO's budget is out.");

invitation_list[2] = "Tom & Jerry";

console.log("\n *************** So our new guests are... ***************",);


for(let i of invitation_list){
    console.log(i + ", You are invited to the Dinner Party \"Sassy Party\"");
}
console.log("\n Good news!, More Guests are coming to the party as our \'Dinner Table\' got bigger.");

//adding guests
invitation_list.unshift("Mickey Mouse");
invitation_list.splice(3,0,"Samurai Jack");
invitation_list.push("Dora");

console.log("\n *************** So our new guests are... ***************",);

for(let i of invitation_list){
    console.log(i + ", You are invited to the Dinner Party \"Sassy Party\"");
}

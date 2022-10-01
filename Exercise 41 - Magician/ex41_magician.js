/*

Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.

*/

let list_magicians = ["Jerry Sadowitz", "Dynamo", "Apollo Robbins", "Derren Brown", "Criss Angel"];

function show_magicians(magicians_array) {
  for (let magician of magicians_array) {
    console.log(magician);
  }
}

show_magicians(list_magicians);
/*

Great Magicians: Start with a copy of your program from Exercise 39. 

Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.

*/

let list_magicians = ["Jerry Sadowitz", "Dynamo", "Apollo Robbins", "Derren Brown", "Criss Angel"];

function show_magicians(magicians_array) {
  for (let magician of magicians_array) {
    console.log(magician);
  }
  console.log();// empty line to make more readable
}

function make_great(magicians_array) {
  for (let [index, value] of magicians_array.entries()) {
    magicians_array[index] = "The Great " + value;
  }
}

show_magicians(list_magicians);
make_great(list_magicians); // add "The Great " word. It won't print anything!
show_magicians(list_magicians);

/*

Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array 
and store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array with 
the Great added to each magician’s name.

*/

let list_magicians = ["Jerry Sadowitz", "Dynamo", "Apollo Robbins", "Derren Brown", "Criss Angel"];
let list_magician_copy = list_magicians.slice();

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
  return magicians_array;
}

// take the return value of modified array and store it in great_magician array.
let great_magicians = make_great(list_magician_copy);

show_magicians(list_magicians);
show_magicians(great_magicians);



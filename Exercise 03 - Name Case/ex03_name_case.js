/*
Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let person_name = "   alex hales ";

//remove white spaces from both end of the string.
person_name = person_name.trim(); 

console.log("Name In Lower Case: " + person_name.toLowerCase());
console.log("Name In Upper Case: " + person_name.toUpperCase());

//split from every space " " between name.  - Split method returns the Array.
let person_name_array = person_name.split(" "); 

for (let [name_index,name_part] of person_name_array.entries()){
    person_name_array[name_index] = name_part[0].toUpperCase() + name_part.slice(1);
}
let title_case = person_name_array.join(" "); //join method convert array to string with " " (space) character
console.log("Name In Title Case:",title_case);




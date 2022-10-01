let car = 'subaru';
let arr = ["cat",2,3,4,5];

console.log(); // empty space, to make it more readable

// Tests for equality and inequality with strings
console.log("\"35\" == 35 :","35" == 35) // true
console.log("\"35\" === 35 :","35" === 35) // false


// Tests using the lower case function
console.log(car == car.toUpperCase()); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(3 == 5); //false
console.log(3 < 5); //true
console.log(5 <= 5); //true
console.log(5 < 5); //false
console.log(); // empty space

// Tests using "and" and "or" operators
console.log((5 < 10) && (3 > 1)); //true
console.log((6 > 5) && (1 > 2)); //false
console.log((6 > 5) || (1 > 2)); //true
console.log(); // empty space

// Test whether an item is in a array
console.log(typeof arr == "array") // false
console.log(typeof arr == "object") // true
console.log(arr[0] == "cat") //true
console.log();


// Test whether an item is not in a array
console.log(arr[0] == "car") //true

console.log(); // empty space, to make it more readable
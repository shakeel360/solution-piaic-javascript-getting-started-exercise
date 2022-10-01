let car = 'suzuki';
let car_model = '2021';
let current_year = 2022;

console.log(3 == "3") // true
console.log(car == 'suzuki'? true : false); //true
console.log(current_year > car_model) // false
console.log(car != car_model) //true
console.log(car_model < current_year); // true
console.log(car == 'toyota'? true : false); //false
console.log(car == 'subaru'); //false
console.log(car == car_model); //false
console.log(car_model === current_year); // false
console.log(isNaN(car_model)); // false - it is function which return the boolean.


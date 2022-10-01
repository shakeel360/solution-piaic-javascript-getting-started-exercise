let locations = ["Canada","Austria","Finland","Turkey","New Zealand"];

let asc_locations = locations.slice().sort();
let dsc_locations = locations.slice().sort().reverse();

console.log("**************************************************************")
console.log("Ascending Order");
console.log("**************************************************************")
console.log(locations);
console.log(asc_locations);
console.log(locations);
console.log("**************************************************************")
console.log("Descending Order, Original Order Remains");
console.log("**************************************************************")
console.log(dsc_locations);
console.log(locations);
console.log("**************************************************************")
console.log("Reverse Order, Order Changed");
console.log("**************************************************************")
console.log(locations.reverse());
console.log(locations);
console.log("**************************************************************")
console.log("Reverse Order Again, Order Changed");
console.log("**************************************************************")
console.log(locations.reverse());
console.log(locations);
console.log("**************************************************************")
console.log("Sort Array, Order Changed");
console.log("**************************************************************")
console.log(locations.sort());
console.log(locations);
console.log("**************************************************************")
console.log("Sort Array Reversed, Order Changed");
console.log("**************************************************************")
console.log(locations.reverse());
console.log(locations);



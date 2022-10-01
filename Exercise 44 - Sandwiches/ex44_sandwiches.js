/*

Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.

*/


console.log()// empty line to make more readable in terminal.

function make_sandwich(...toppings){ // ... is used where number of arguments to be received are undefined. (Spread Syntax)
    let topping_string = toppings.join(", ");
    console.log("Sandwich Ordered With Toppings:", topping_string );
    console.log()// empty line to make more readable in terminal.
}

make_sandwich("cheese","chili sause"); // 2 arguments
make_sandwich("Bacon","Chilies","Avocado"); // 3 arguments
make_sandwich("Boiled Eggs"); // 1 argument

console.log()// empty line to make more readable in terminal.


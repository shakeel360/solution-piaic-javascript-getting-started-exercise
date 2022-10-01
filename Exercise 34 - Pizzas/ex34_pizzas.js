/*

Pizzas: Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza 
instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing a simple 
statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, 
that states how much you like pizza. The output should consist 
of three or more lines about the kinds of pizza you like and then 
an additional sentence, such as I really love pizza!


*/

let fav_pizza = ["Cheese Pizza","Margherita Pizza","BBQ Chicken Pizza"];
let helper_sentences = ["I like","I Love","I Can't Resist"]

/* part 01 - print all flavours
for(let pizza of fav_pizza){
    console.log(pizza);
}
*/
for(let p = 0; p < fav_pizza.length; p++){
    console.log(helper_sentences[p] + ", " + fav_pizza[p]);
}


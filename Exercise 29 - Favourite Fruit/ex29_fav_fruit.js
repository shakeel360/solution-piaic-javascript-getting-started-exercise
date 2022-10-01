/*

Favorite Fruit: Make a array of your favorite fruits, 
and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/

let favorite_fruits = ["apple","banana","grapes"];

if(favorite_fruits.includes("grapes")){
    console.log("Yes to Grapes");
}

if(favorite_fruits.includes("apple")){
    console.log("Yes to Apples");
}

if(favorite_fruits.includes("banana")){
    console.log("Yes to Banana");
}

if(favorite_fruits.includes("Mango")){
    console.log("Yes to Mango");
}

if(favorite_fruits.includes("Kiwi")){
    console.log("Yes to Kiwi");
}

/*

Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the 
new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/

let current_users = ["john","ALEX","newton","david","ADAMS"];
let new_users = ["JOHN","babar","rizwan","shadab","adams"];

// convert all elements in current_users to lowerCase
for(let [user_index,user_value] of current_users.entries()){
    current_users[user_index] = user_value.toLowerCase();
}

console.log(); // empty space, make code more readable in terminal 
for(let user of new_users){
    if(current_users.includes(user.toLowerCase())){
        console.log(user + " is already used, please choose different.");
    }else {
        console.log(user + " is available.");
    }
}
console.log(); // empty space, make code more readable in terminal 

/*

Large Shirts: Modify the make_shirt() function so that shirts are large
 by default with a message that reads I love JavaScript. 
 Make a large shirt and a medium shirt with the default message, 
 and a shirt of any size with a different message.

*/

function make_shirt(size, text){
    let default_size = "Large";
    let default_message = "I Love JavaScript"

    if(arguments.length == 0){
        console.log("Size of the shirt is: " + default_size + "\nText on the Shirt is: " + default_message);
    }else if (arguments.length == 1){
        console.log("Error");    
    }
    else if((size == "large") || (size == "medium")){
        console.log("Size of the shirt is: " + size + "\nText on the Shirt is: " + default_message);
    }
    else{
        console.log("Size of the shirt is: " + size + "\nText on the Shirt is: " + text);
    }
}

//make_shirt("rascal");
//make_shirt("medium","Let's Code");
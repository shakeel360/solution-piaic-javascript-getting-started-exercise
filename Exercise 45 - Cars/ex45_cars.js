/*

Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 

Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 

Print the Object that’s returned to make sure all the information was stored correctly.

*/

function car(car_manufacture,car_model,...features){

    let details = {
        manufacture : car_manufacture,
        model : car_model,
    }

    for (let obj of features){ // get current object from array of objects (key-value pairs), named as features.
        
        //since each object in array contains one key-value pair we can use below
        details[Object.keys(obj).toString()] = Object.values(obj).toString();

        /* 
        
        //Below will be used, if any object in array of features contain more than one key-value pair. 
        for(let key in obj){
            details[key] = obj[key];
            //console.log(Object.values(key).toString());
        }
        */
    }

    console.log("*******************");
    console.log(details);
    console.log("*******************");
    
}

car("suzuki","alto",{Seats:"Leather"},{Color:"White"});

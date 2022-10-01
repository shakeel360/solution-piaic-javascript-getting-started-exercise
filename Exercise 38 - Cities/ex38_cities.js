/*

Cities: Write a function called describe_city() that accepts the 
name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. 
Call your function for three different cities, at least one of which is not in the default country.

*/

function describe_city(cityName,countryName){
    default_countryName = "Pakistan";

    if(arguments.length == 1){
        console.log(cityName + " is in " + default_countryName);
    }else{
        console.log(cityName + " is in " + countryName);
    }
}

describe_city("Lahore","Turkey");
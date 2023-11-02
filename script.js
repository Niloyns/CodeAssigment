// Assignment 1


//Create an empty array.
let fruits = new Array();

//Add the fruits to the "fruits" array.
fruits.push( "apple", "banana", "orange"); 
fruits.shift(); //Remove first index fruit.
fruits.push("grape");// Add fruit last.
fruits[1]= "pear"; // update first index.

console.log (fruits);//priint


/***************************************************************************************************/


// Assignment 2


// Empty Object
let person ={};

 // add some properties
person={
    name :"Niloy", 
    city : "Kolkata",
    age : "25"
};

delete person.age; // delete age
person.job="Engineer"; // add object
person.city="San Francisco" // update city

console.log(person);


/***************************************************************************************************/


// Assignment 3


//  Create an empty array
let cars = new Array();

//Add three car objects
cars.push( 
    {make:"Toyota", model:"Camry", year:2018},
    {make:"Mahindra", model:"Camry", year:2018},
    {make:"TATA", model:"Camry", year:2018}
);

cars.shift(); // Remove the first car object

// Add a new car object
cars.push(
    {make:"Honda", model:"Civic", year:"2020"}
);

//Update the "model" property
cars[1].model="Accord"; 

console.log(cars);//Print

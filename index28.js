"use strict";
// QUESTION 28 
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 65;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age > 0 && age < 2) {
    console.log("Baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("Todder");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("Kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("Teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("Adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.   
else if (age >= 65) {
    console.log("Elder");
}
else {
    console.log("Un-defined");
}
// QUESTION 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fruits = ["Banana", "Apple", "Grapes", "Strawberry", "Orange"];
var favorite_fruits = ["Bananas", "Oranges", "Apple"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits.includes(favorite_fruits[i])) {
        console.log("You are really like!", favorite_fruits[0]);
    }
}
;

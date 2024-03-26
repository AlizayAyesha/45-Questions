//23. Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test. Your code
//should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let x = 5;
let y = 10;

// Test 1: Check if x is equal to 5
console.log("Is x == 5? I predict True.");
console.log(x == 5); // Prediction: True

// Test 2: Check if y is equal to 15
console.log("Is y == 15? I predict False.");
console.log(y == 15); // Prediction: False

// Test 3: Check if x is greater than y
console.log("Is x > y? I predict False.");
console.log(x > y); // Prediction: False

// Test 4: Check if y is less than or equal to 10
console.log("Is y <= 10? I predict True.");
console.log(y <= 10); // Prediction: True

// Test 5: Check if x is not equal to 6
console.log("Is x != 6? I predict True.");
console.log(x != 6); // Prediction: True

// Test 6: Check if y is not equal to '10' (using strict equality operator)
console.log("Is y === '10'? I predict False.");
console.log(y === '10'); // Prediction: False

// Test 7: Check if x is less than y
console.log("Is x < y? I predict True.");
console.log(x < y); // Prediction: True

// Test 8: Check if y is greater than 5
console.log("Is y > 5? I predict True.");
console.log(y > 5); // Prediction: True

// Test 9: Check if x is equal to '5' (using loose equality operator)
console.log("Is x == '5'? I predict True.");
console.log(x == '5'); // Prediction: True

// Test 10: Check if y is not equal to 10
console.log("Is y != 10? I predict False.");
console.log(y != 10); // Prediction: False

//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array



// Tests for equality and inequality with strings
let flower1 = 'rose';
let flower2 = 'lily';

console.log("Is flower1 equal to 'rose'? I predict True.");
console.log(flower1 == 'rose'); // Prediction: True

console.log("Is flower2 not equal to 'sunflower'? I predict True.");
console.log(flower2 != 'sunflower'); // Prediction: True

// Tests using the lower case function
let flowerName1 = 'ROSE';
let flowerName2 = 'lily';

console.log("Is flowerName1 lowercase equal to flowerName2 lowercase? I predict True.");
console.log(flowerName1.toLowerCase() == flowerName2.toLowerCase()); // Prediction: True

// Numerical tests
let price1 = 10;
let price2 = 20;

console.log("Is price1 equal to 10? I predict True.");
console.log(price1 == 10); // Prediction: True

console.log("Is price2 greater than 10? I predict True.");
console.log(price2 > 10); // Prediction: True

console.log("Is price1 less than or equal to 20? I predict True.");
console.log(price1 <= 20); // Prediction: True

console.log("Is price2 not equal to 20? I predict False.");
console.log(price2 != 20); // Prediction: False

// Tests using "and" and "or" operators
let hasPollen = true;
let hasFragrance = false;

console.log("Does the flower have pollen and no fragrance? I predict True.");
console.log(hasPollen && !hasFragrance); // Prediction: True

console.log("Is it either has pollen or has fragrance? I predict True.");
console.log(hasPollen || hasFragrance); // Prediction: True

// Test whether a flower is in an array
let flowerArray = ['rose', 'lily', 'tulip'];

console.log("Is 'tulip' in the flower array? I predict True.");
console.log(flowerArray.includes('tulip')); // Prediction: True

// Test whether a flower is not in an array
console.log("Is 'orchid' not in the flower array? I predict True.");
console.log(!flowerArray.includes('orchid')); // Prediction: True


//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that
//fails. (The version that fails will have no output.)


let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


let alien_color: string = 'red';

// Check if the alien's color is green
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//write an if-else chain.

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.


let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

let alien_color: string = 'red';

// Check if the alien's color is green
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alien_color: string = 'green';

// Check the color of the alien and print the corresponding message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

let alien_color: string = 'yellow';

// Check the color of the alien and print the corresponding message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points.");
}


let alien_color: string = 'red';

// Check the color of the alien and print the corresponding message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

//28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//      • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
//23. Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test. Your code
//should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let x:number = 5;
let y: number  = 10;

// Test 1: Check if x is equal to 5
console.log("Is x == 5? I predict true.");
console.log(x == 5); // Prediction: true

// Test 2: Check if y is equal to 15
console.log("Is y == 15? I predict false.");
console.log(y == 15); // Prediction: false

// Test 3: Check if x is greater than y
console.log("Is x > y? I predict false.");
console.log(x > y); // Prediction: false

// Test 4: Check if y is less than or equal to 10
console.log("Is y <= 10? I predict true.");
console.log(y <= 10); // Prediction: true

// Test 5: Check if x is not equal to 6
console.log("Is x != 6? I predict true.");
console.log(x != 6); // Prediction: true

// Test 6: Check if y is not equal to '10' (using strict equality operator)
console.log("Is y === '10'? I predict true.");
console.log(y === 10); // Prediction: true

// Test 7: Check if x is less than y
console.log("Is x < y? I predict true.");
console.log(x < y); // Prediction: true

// Test 8: Check if y is greater than 5
console.log("Is y > 5? I predict True.");
console.log(y > 5); // Prediction: True

// Test 9: Check if x is equal to '5' (using loose equality operator)
console.log("Is x == '5'? I predict True.");
console.log(x == 5); // Prediction: True

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
let flower1 : string = 'rose';
let flower2 : string =  'lily';

console.log("Is flower1 equal to 'rose'? I predict true.");
console.log(flower1 == 'rose'); // Prediction: true

console.log("Is flower2 not equal to 'sunflower'? I predict true.");
console.log(flower2 != 'sunflower'); // Prediction: true

// Tests using the lower case function
let flowerName1 : string = 'ROSE';
let flowerName2 : string = 'lily';

console.log("Is flowerName1 lowercase equal to flowerName2 lowercase? I predict true.");
console.log(flowerName1.toLowerCase() == flowerName2.toLowerCase()); // Prediction: true

// Numerical tests
let price1 = 10;
let price2 = 20;

console.log("Is price1 equal to 10? I predict true.");
console.log(price1 == 10); // Prediction: true

console.log("Is price2 greater than 10? I predict true.");
console.log(price2 > 10); // Prediction: true

console.log("Is price1 less than or equal to 20? I predict true.");
console.log(price1 <= 20); // Prediction: true

console.log("Is price2 not equal to 20? I predict false.");
console.log(price2 != 20); // Prediction: false

// Tests using "and" and "or" operators
let hasPollen : boolean = true;
let hasFragrance : boolean =  false;

console.log("Does the flower have pollen and no fragrance? I predict true.");
console.log(hasPollen && !hasFragrance); // Prediction: true

console.log("Is it either has pollen or has fragrance? I predict true.");
console.log(hasPollen || hasFragrance); // Prediction: true

// Test whether a flower is in an array
let flowerArray = ['rose', 'lily', 'tulip'];

console.log("Is 'tulip' in the flower array? I predict true.");
console.log(flowerArray.includes('tulip')); // Prediction: true

// Test whether a flower is not in an array
console.log("Is 'orchid' not in the flower array? I predict true.");
console.log(!flowerArray.includes('orchid')); // Prediction: true


//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that
//fails. (The version that fails will have no output.)


let alienColor: string = 'green';

// Check if the alien's color is green
if (alienColor == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


let alien_color0: string = 'red';

// Check if the alien's color is green
if (alien_color0== 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//write an if-else chain.

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.


let alien_color1: string = 'green';

// Check if the alien's color is green
if (alien_color1== 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

let alien_color2: string = 'red';

// Check if the alien's color is green
if (alien_color2== 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alien_color3: string = 'green';

// Check the color of the alien and print the corresponding message
if (alien_color3 == 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color3 == 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color3 == 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

let alien_color5: string = 'yellow';

// Check the color of the alien and print the corresponding message
if (alien_color5== 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color5== 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color5 == 'red') {
    console.log("Congratulations! You just earned 15 points.");
}


let alien_color6: string = 'red';

// Check the color of the alien and print the corresponding message
if (alien_color6 == 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color6== 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color6 == 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

//28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.

let age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!


let favorite_fruits: string[] = ["Peaches", "Jack Fruite", "Coconut"];

if (favorite_fruits.includes("Peaches")) {
    console.log("I really like Peaches");
}

if (favorite_fruits.includes("Jack Fruite")) {
    console.log("I really like Jack Fruite");
}

if (favorite_fruits.includes("Coconut")) {
    console.log("I really like Coconut");
}

if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes");
} else {
    console.log("Grapes are not in my favorite fruits list");
}

if (favorite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberry");
} else {
    console.log("Strawberry is not in my favorite fruits list");
}

// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// Define an array of usernames
let usernames: string[] = ["admin", "gojo", "nanami", "sukuna", "toji"];

// Loop through the array and print greetings
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});


// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// Define an array of usernames
let usernames: string[] = ["admin", "gojo", "nanami", "sakuna", "toji"];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is not empty after removal
if (usernames.length > 0) {
    console.log("Users still exist in the list.");
} else {
    console.log("We need to find some users!");
}

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//define lists
let current_users: string[] = ["aria","adaline","ava","bridget","jules"];

let new_users: string[]= ["stella","bridget","eliza","ARIA","vivian"];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Loop through new users to check for uniqueness
new_users.forEach(new_user => {
    // Convert new username to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();
    
    // Check if the new username is already used
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
});


// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.


// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
numbers.forEach(number => {
    // Determine the ordinal ending based on the number
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    
    // Print the number with its ordinal ending
    console.log(`${number}${ordinal}`);
});


// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!



// Define an array of favorite pizza names
let pizzas: string[] = ["Margherita", "Pepperoni", "Supreme"];

// Print the name of each pizza using a for loop
console.log("Printing pizza names:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}

// Modify the for loop to print a sentence using the name of each pizza
console.log("\nPrinting pizza statements:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

// Print a statement indicating how much you like pizza
console.log("\nI really love pizza!");

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!


// Define an array of animal names
let animals: string[] = ["Lion", "Panther", "Cheetah"];

// Print the name of each animal using a for loop
console.log("Animal names:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Modify the for loop to print a statement about each animal
console.log("\nAnimal statements:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} is a majestic creature.`);
}

// Print a statement indicating what these animals have in common
console.log("\nAny of these animals would make an impressive sight in the wild!");


// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`Size: ${size.toUpperCase()}, Message: ${message}`);
}

// Call the make_shirt function
make_shirt("medium", "Keep calm and code on!");

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// Define the make_shirt function with default parameters
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size.toUpperCase()}, Message: ${message}`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("medium");

// Create a shirt of any size with a different message
make_shirt("small", "TypeScript rocks!");

// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.


// Define the describe_city function with a default value for the country parameter
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("Paris", "France");



// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with three different city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));

// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

// Define the make_album function with an optional parameter for the number of tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the make_album function to create three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 10); // Including the number of tracks
let album3 = make_album("Artist3", "Album3");

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);


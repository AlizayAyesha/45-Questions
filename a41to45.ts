// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Create an array of magician's names
let magicians: string[] = ["klaus", "elijah", "Damon ", "stefen"];

// Call the show_magicians function with the array of magician's names
show_magicians(magicians);

// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Create an array of magician's names
let magicians: string[] = ["klaus", "elijah", "Damon ", "stefen"];

// Call the make_great function to modify the array of magicians
magicians = make_great(magicians);

// Call the show_magicians function to see the modified list of magicians
show_magicians(magicians);

// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


// Define the make_sandwich function
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(item => {
        console.log(item);
    });
    console.log("Bread\n");
}

// Call the make_sandwich function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese", "Tomato", "Mustard");
make_sandwich("Peanut Butter", "Jelly");



// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

// Define the carInformation function
function carInformation(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    let carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let key = Object.keys(option)[0];
        carInfo[key] = option[key];
    });
    return carInfo;
}

// Call the carInformation function with required information and additional name-value pairs
let car = carInformation("Toyota", "Camry", color: "blue", year: 2022);

// Print the Object returned by the function
console.log(car);

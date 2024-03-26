//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

// Define the original guest list
let guestsList: string[] = ["Josh Chen", "Carter Cross", "Jeremy Volkove"];

// Print invitation messages for the original guest list
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to dinner. It will be an honor to have your presence.`);
});

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add new guests to the guest list
guestsList.unshift("Dante Russo"); // Add one new guest to the beginning of the array
guestsList.splice(Math.ceil(guestsList.length / 2), 0, "Julian Esguerra"); // Add one new guest to the middle of the array
guestsList.push("Kenji Kishimoto"); // Use push() to add one new guest to the end of the array

// Print invitation messages for the updated guest list
console.log("\nUpdated invitation messages:");
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to dinner. It will be an honor to have your presence.`);
});

//18. Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its
//order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Define an array of places to visit
let placesToVisit: string []= ["Bali","Bora Bora","Maldives","Makkah"];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort());
 
// Print the array to show it's still in its original order
console.log("\nOriginal order (still intact):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());


// Print the array to show it's still in its original order
console.log("\nOriginal order (still intact):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit)

// Reverse the order of the list again to restore its original order
placesToVisit.reverse();
console.log("\nRestored original order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);

//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.

// Define an array of pets
let pets: string[] = [ "Dog","Cat","Shark","Parrot","Mouse","Rabbit","Snake","Cheetah","Falcon","Lion"];

// Print the array of pets
console.log("List of Pets:");
console.log(pets);

//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.

// Define objects containing information about flowers
let flower1 = {
    name: "Rose",
    color: "Red",
    fragrance: "Sweet",
    bloomingSeason: "Spring to Autumn",
    nativeTo: "Asia",
    pricePerStem: 1.5
};

let flower2 = {
    name: "Sunflower",
    color: "Yellow",
    fragrance: "None",
    bloomingSeason: "Summer to Fall",
    nativeTo: "North America",
    pricePerStem: 1.2
};

let flower3 = {
    name: "Lily",
    color: "White",
    fragrance: "Pleasant",
    bloomingSeason: "Spring to Summer",
    nativeTo: "Europe, Asia, North America",
    pricePerStem: 1.8
};

// Print information about the flowers
console.log("Information about Flowers:");
console.log(flower1);
console.log(flower2);
console.log(flower3);

//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define objects containing information about bikes
let bike1 = {
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    price: 16000
};

let bike2 = {
    brand: "Yamaha",
    model: "YZF-R6",
    year: 2021,
    color: "Blue",
    price: 13000
};

let bike3 = {
    brand: "Kawasaki",
    model: "Ninja 650",
    year: 2020,
    color: "Green",
    price: 9000
};

// Print information about the bikes
console.log("Information about Bikes:");
console.log(bike1);
console.log(bike2);
console.log(bike3);

//
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let Names: string [] = ["Zade Medows","Arron Warrner","Rhys Larsen","Christan Harper"];

console.log(Names [0]);
console.log(Names [1]);
console.log(Names[2]);
console.log(Names[3]);

//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.

let names: string [] = ["Zade Medows","Arron Warrner","Rhys Larsen","Christan Harper"];

let message: string [] = "Do you like to play games ";

console.log(names [0] + " " + message);
console.log(names [1] + " " + message);
console.log(names [2] + " " + message);
console.log(names [3] + " " + message);

//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let favTransport: string[] = ["Toyota Supra","Mazada rx7","Kuwasaki", "Nissan Skyline GT-R"]

favTransport.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});


//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestsList: string[] = ["Josh Chen", "Alex Volkove", "Jeremy Volkove"];

guestsList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to dinner. It will be an honor to have your presence.`);
});

//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still
//in your list.

// Define the original guest list
let guestsList: string[] = ["Josh Chen", "Alex Volkove", "Jeremy Volkove"];

// Print invitation messages for the original guest list
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to dinner. It will be an honor to have your presence.`);
});

// Print the name of the guest who can't make it
console.log("Unfortunately, Alex Volkove can't make it to dinner.");

// Replace the name of the guest who can't make it with a new guest
let indexToRemove: number = guestsList.indexOf("Alex Volkove");
if (indexToRemove !== -1) {
    guestsList.splice(indexToRemove, 1, "Carter Cross");
}

// Print invitation messages for the updated guest list
console.log("\nSecond set of invitation messages:");
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to dinner. It will be an honor to have your presence.`);
});



//# Getting Started Exercises with TypeScript and Node.js

//Note: Try these short programs to get some firsthand experience with TypeScript and Node.js.
//You might want to create a new folder for each exercise to keep them organized. Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo. 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

//Done
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
//would you like to learn some Python today?”

// Store the person's name in a variable
let personName: string = "Eric";

// Print a message to the person
console.log(`Hello ${personName}, would you like to learn some Python today`);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store the person's name in a variable
let person_Name: string = "Alizay";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", toTitleCase(personName));

// Function to convert a string to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
//following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// Store the quote and its author
let quote: string = "A person who never made a mistake never tried anything new";
let author: string = "Albert Einstein";

// Print the quote and its author
console.log(`${author} once said, "${quote}"`);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


// Repeat Exercise 4 with variables

// Store the famous person's name in a variable
let famousPerson: string = "Albert Einstein";

// Compose the message
let message: string = `${famousPerson} once said, "${quote}"`;

// Print the message
console.log(message);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



// Store the person's name with whitespace characters
let personNameWithWhitespace: string = "\tJohn Doe\n";

// Print the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);

// Print the stripped name
console.log("Stripped name:", personNameWithWhitespace.trim());
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

// Addition
console.log("Addition:", 5 + 3);

// Subtraction
console.log("Subtraction:", 10 - 2);

// Multiplication
console.log("Multiplication:", 4 * 2);

// Division
console.log("Division:", 16 / 2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//8. You should create four lines that look like this:


//_____________________________________________

//console.log(5 + 3)

//_____________________________________________

//Your output should simply be four lines with the number 8 appearing once on each line.

//_____________________________________________
console.log(5 + 3)
//_____________________________________________
console.log(10 - 2)
//_____________________________________________
console.log(4 * 2)
//_____________________________________________
console.log(16 / 2)
//_____________________________________________

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message

// Store and print your favorite number
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.

// Program written by [Alizay Ayesha]
// Date: [3/23/2024]
// This program stores and prints the favorite number of mine.
 
// Store and print the author's favorite number
let favorite_Number: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Program written by [Your Name]
// Date: [Current Date]
// This program demonstrates how to strip leading and trailing whitespace characters from a person's name.

// Store the person's name with whitespace characters
let _personNameWithWhitespace: string = "\tJohn Doe\n";

// Print the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);

// Strip the whitespace from the name
let strippedName: string = personNameWithWhitespace.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);










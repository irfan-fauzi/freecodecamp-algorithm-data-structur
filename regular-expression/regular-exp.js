/*
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
true jika kata nya ada / false jika kata tidak ada
*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // true

// mengunakan atau / or
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// memaklumi huruf BESAR atau kecil dengan /string/i
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);


// MATCH / match()

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

// To search or extract a pattern more than once, you can use the g flag.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiueo]/g; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line




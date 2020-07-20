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
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);


// MATCH / match()

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

// To search or extract a pattern more than once, you can use the g flag.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiueo]/g;
let result = quoteSample.match(vowelRegex); // Change this line

/*
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

*/
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// mencari karakter dari alphabet dari a-z dan 0-9
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);



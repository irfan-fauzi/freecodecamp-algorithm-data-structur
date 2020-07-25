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


/*  
    beberapa contoh kasus yang sudah kita buat adalah untuk mencocokan dengan karakter yang kita ingin cari, 
    dalam regular expression bisa huga kita memisahkan karakter yang tidak kita inginkan :
    
    To create a negated character set, you place a caret character (^) 
    after the opening bracket and before the characters you do not want to match.

    For example, /[^aeiou]/gi matches all characters that are not a vowel. 
    Note that characters like ., !, [, @, / and white space are matched - the negated 
    vowel character set only excludes the vowel characters.
*/

let quoteSample = "3 blind mice.";
let myRegex = /[^aiueo0-9]/gi; // mengecualikan karakter [aiueo dan 0-9]
let result = quoteSample.match(myRegex); // 

/*

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].

If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match

*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

/*
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

*/
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// 
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);



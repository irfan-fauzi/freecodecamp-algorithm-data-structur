// tanda (*) 0 atau lebih

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// tanda (+) 1 atau lebih
let difficultSpelling = "Mississippi sexy";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex); // return ["ss", "ss", "s"]







/*
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. 
The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);
console.log(result) // <h1>


// dalam javascript kita bisa mengganti regex /[a-zA-Z0-9]/ menjadi \w
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

// begitu juga kebalikannya , [^a-zA-Z0-9_] diganti menjadi \W

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]


// kita juga bisa mengganti [0-9] dengan [\d]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // akan menangkap angka[0-9]
let result = movieName.match(numRegex)

// begitu juga kebalikannya [^0-9] dengan [\D]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;




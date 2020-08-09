// const string = "titanic";
// const regex = /t[a-z]*?i/g;
// const result = string.match(regex);
// console.log(result);

// const string = "<h2>welcomeoasd to the</h2>";
// const regex = /<[a-z0-9/]*?>/g;
// const result = string.match(regex);
// console.log(result);

// const string = "sudahs2345";
// const regex = /^[a-z]{3,6}[0-9]{2,4}$/;
// let result = string.match(regex);

const string = "the sky is silver";
const regexSilver = /sky/;
const result = string.replace(regexSilver, "awan");

//console.log(result);
const kata = "satu dua tiga";
let ganti = kata.replace(/(\w+)\s(\w+)\s(\w+)/, '$2 $1 $3');

const word = "  sekolah koding  ";
const hasil = word.replace(/^\s+|\s+$/g, '');



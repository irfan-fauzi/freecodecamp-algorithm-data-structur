function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)

    // Only change code above this line
}
console.log(splitify("Hello World,I-am code")); // [ 'Hello', 'World', 'I', 'am', 'code' ]

////////////////////////


var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

/*
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

*/
//Un-curried function
function unCurried(x, y) {
    return x + y;
}

//Curried function
function curried(x) {
    return function (y) {
        return x + y;
    }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

///////////////////////

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

///////////////////////

//Impartial function
function impartial(x, y, z) {
    return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

///////////////

function add(x) {
    // Only change code below this line
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }

    // Only change code above this line
}
let run = add(10)(20)(30);
console.log(run) // 60



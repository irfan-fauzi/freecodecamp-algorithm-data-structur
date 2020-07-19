// 1. EXPORT FILE JS

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

//----------------------------------------------------
// 2. IMPORT FILE JS

import { uppercaseString, lowercaseString } from './string_function.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// ------------------------------------------------------

// 3. IMPORT ALL
// Only change code above this line
import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


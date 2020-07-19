// function myFunc(n) {
//     if (n === 0) {
//         return 0;
//     }
//     console.log(n)
//     return myFunc(n - 1);
// }
// console.log(myFunc(10));





// function multiply(arr, n) {
//     var product = 0;
//     for (var i = 0; i < n; i++) {
//         product += arr[i];
//     }
//     return product;
// }

// console.log(multiply([2, 3, 4, 5], 3));


function multiply(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return multiply(arr, n - 1) + arr[n - 1];
}
console.log(multiply([2, 3, 4, 5], 3));

// function multiply(arr, n) {

//     if (n === 0) {
//         return;
//     }




// }


//
// let arr = [1, 2, 3, 4, 5];
// let baru = arr[3] * 10;
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
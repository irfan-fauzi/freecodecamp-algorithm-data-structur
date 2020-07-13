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

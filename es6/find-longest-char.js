// function findLongestChar(str) {
//     const arrStr = str.split(' ');
//     let num = 0;
//     let hasil = null;
//     for (let i = 0; i < arrStr.length; i++) {
//         if (num < arrStr[i].length) {
//             num = arrStr[i].length;
//             hasil = arrStr[i].length;
//         }
//     }
//     return hasil;

// }

//console.log(findLongestChar("aku adalah anak gembala "))

// find biggner number in array

function largestOfFour(arr) {

    let hasil = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (num < arr[i][j]) {
                num = arr[i][j];
            }

        }
        hasil.push(num)
    }
    return hasil;


}

console.log(largestOfFour([[4, 3, 1, 15], [30, 27, 18, 26], [20, 300, 37, 39], [10, 1001, 857, 2000]]));

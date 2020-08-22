// function truncateString(str, num) {

//     if (num < str.length) {
//         let regex = new RegExp('^(.\w*){' + num + '}', 'ig');
//         return str.match(regex) + "...";
//     } else {
//         return str;
//     }


//     // if (str.length > num) {
//     //   return str.slice(0, num) + "...";
//     // } else {
//     //   return str;
//     // }

// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket ball and soccer", 5));
function findElement(arr, func) {


}

// console.log(findElement([1, 2, 3, 4],function(num) {num % 2 === 0}));

function myFunct(fn, param) {


    for (let i = 0; i < param.length; i++) {
        //let hasil = 0;
        if (fn(param[i]) == true) {
            return param[i];

        }

    }



}
console.log(myFunct(function (num) {
    return num % 2 == 0;
}, [1, 3, 5, 9])) 
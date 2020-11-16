function fibo(n) {
    if (n <= 1) {
        return [0, 1];
    }
    let hasil = fibo(n - 1)
    hasil.push(hasil[hasil.length - 1] + hasil[hasil.length - 2]);
    return hasil
}

console.log(fibo(10))

// let arr = [1, 2, 3, 4, 5];

// function recursion(n) {
//     for (let i = n.length; i >= 0; i--) {
//         console.log(n[i])
//     }
// }

// recursion(arr)

// function fibo(n) {
//     let hasil = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//         hasil.push(hasil[i - 2] + hasil[i - 1])
//     }
//     return hasil
// }

// console.log(fibo(5))
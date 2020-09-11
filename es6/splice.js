const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function iris(arr, potongan) {
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        let iris = arr.splice(0, potongan);
        hasil.push(iris)

    }
    if (arr.length == 0) {
        return hasil;
    } else if (arr.length > potongan) {
        let sayat = arr.splice(0, potongan);
        hasil.push(sayat);
        hasil.push(arr);
        return hasil;
    }
    hasil.push(arr);
    return hasil;
}
console.log(iris(arr, 4));
function diffArray(arr1, arr2) {
    let hasil = [];
    function beda(satu, dua) {
        for (let i = 0; i < satu.length; i++) {
            if (dua.indexOf(satu[i]) === -1) {
                hasil.push(satu[i])
            }
        }
    }
    beda(arr1, arr2);
    beda(arr2, arr1)
    return hasil;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
    let arrBanding = [];
    let hasil = []
    for (let val of arguments) {
        arrBanding.push(val)
    }
    arrBanding.splice(0, 1);
    for (let i = 0; i < arr.length; i++) {
        if (arrBanding.indexOf(arr[i]) == -1) {
            hasil.push(arr[i]);
        }
    }
    return hasil



}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function uniteUnique(arr) {
    let wadah = [];
    // buat array baru yang berisi gabungan arr
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            wadah.push(arguments[i][j])
        }
    }
    
    let hasil = [];
    for (let val of wadah) {
        if (hasil.indexOf(val) < 0) {
            hasil.push(val)
        }
    }
    return hasil


}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

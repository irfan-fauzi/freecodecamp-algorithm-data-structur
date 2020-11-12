// function uniteUnique(arr) {
//     let wadah = [];
//     // buat array baru
//     for (let i = 0; i < arguments.length; i++) {
//         for (let j = 0; j < arguments[i].length; j++) {
//             wadah.push(arguments[i][j])
//         }
//     }

//     // proses
//     let baskom = [];
//     //let sementara = null
//     for (let i = 0; i < wadah.length; i++) {

//         if (wadah[0] === wadah[i]) {
//             let index = wadah.indexOf(wadah[i])
//             baskom.push(wadah[i])
//             wadah.splice(index, 2)

//         }
//         return wadah
//     }



// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
let arrHari = ["senin", "selasa", "rabu", "selasa", "kamis"];

function myFunct(arr) {
    // siapkan array kosong
    let hasil = [];
    // looping array yang diinginkan
    for (let i = 0; i < arr.length; i++) {
        // jika array hasil isinya tidak sama dengan arrHari
        if (hasil.indexOf(arr[i]) === -1) {
            // maka array kosong akan di isi dengan elemen arrHari
            hasil.push(arr[i])
        }
    }
    return hasil


}
console.log(myFunct(arrHari));

/*

    apakah hasil.indexOf("senin") == -1 ? yes (hasil tidak ada "senin")
    arr vhasil = ["senin"]

    apakah hasil.indexOf("selasa") == -1 ? yes (hasil tidak ada "selasa")
    arr hasil = ["senin","selasa"]

    apakah hasil.indexOf("rabu") == -1 ? yes (hasil tidak ada "rabu")
    arr hasil = ["senin","selasa","rabu"]

    apakah hasil.indexOf("selasa") == -1 ? no ("selasa" ada di indexKe 1 pada arr hasil)
    arr hasil masih sama = ["senin","selasa","rabu"]

    apakah hasil.indexOf("kamis") == -1 ? yes (hasil tidak ada "kamis")




*/
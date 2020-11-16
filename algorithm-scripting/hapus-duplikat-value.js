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
    arr hasil = ["senin"]

    apakah hasil.indexOf("selasa") == -1 ? yes (hasil tidak ada "selasa")
    arr hasil = ["senin","selasa"]

    apakah hasil.indexOf("rabu") == -1 ? yes (hasil tidak ada "rabu")
    arr hasil = ["senin","selasa","rabu"]

    apakah hasil.indexOf("selasa") == -1 ? no ("selasa" ada di indexKe 1 pada arr hasil)
    arr hasil masih sama = ["senin","selasa","rabu"]

    apakah hasil.indexOf("kamis") == -1 ? yes (hasil tidak ada "kamis")

*/
// // The global variable
// var fixedValue = 4;

// // Only change code below this line
// function incrementer(arg) {
//     return arg + 1;

//     // Only change code above this line
// }
// let penambahan = incrementer(fixedValue);
// console.log(penambahan) // 5
// console.log(fixedValue) // tetap 4

// The global variable
var bookList = ["satu", "dua", "tiga", "empat"];

// Change code below this line
function add(daftarBuku, namaBuku) {
    let duplikat = [...daftarBuku];
    duplikat.push(namaBuku);
    return duplikat
    // Change code above this line
}

// Change code below this line
function remove(booklist, bookName) {
    let duplikat = [...booklist]
    var book_index = duplikat.indexOf(bookName);
    if (book_index >= 0) {

        duplikat.splice(book_index, 1);
        return duplikat;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'lima'); // ["satu", "dua", "tiga", "empat", "lima"]
var newerBookList = remove(bookList, 'dua'); // dua dihapus ["satu", "tiga", "empat", "lima"]
var newestBookList = remove(add(bookList, 'enam'), 'tiga'); // "satu" ditambahkan, "tiga dihapus"

console.log(newestBookList);
console.log(bookList)

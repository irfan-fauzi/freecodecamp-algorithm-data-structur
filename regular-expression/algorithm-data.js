// Stacks
// contoh yang paling tepat untuk menggambarkan apa itu stack, seperti tumpukan buku yang dususun dari atas kebawah
// !! yang pertama dimasukan -> yang terakhir dikeluarkan
// !! yang terakhir dimasukan -> yang pertama dimasukan

// method Stack : 
/*
    1.push
    2.peek
    3.pop
    4.length
*/

const Stack = function () {
    this.count = 0;
    this.storage = {};
    // 1. push (tambah dari belakang)
    this.push = function (value) {
        this.storage[this.count] = value; // this.count sebagai properti objek storage
        // setelah diisi value ke properti , count bertambah 1
        this.count++;
        return this.storage;
    }
    // 2. pop (hapus dari belakang)
    this.pop = function () {
        // jika data kosong 
        if (this.count === 0) {
            return undefined;
        }
        //this.count--;
        //let hasil = this.storage[this.count];
        delete this.storage[this.count];
        return this.storage;
    }


}

const stack1 = new Stack();
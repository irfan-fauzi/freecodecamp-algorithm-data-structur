/*

Pemrograman fungsional adalah kebiasaan yang baik. Itu membuat kode Anda mudah dikelola, dan menyelamatkan Anda dari bug licik. Tetapi sebelum kita sampai di sana, mari kita lihat pendekatan penting untuk pemrograman untuk menyoroti di mana Anda mungkin memiliki masalah.

Dalam bahasa Inggris (dan banyak bahasa lainnya), bentuk imperatif digunakan untuk memberi perintah. Demikian pula, gaya imperatif dalam pemrograman adalah gaya yang memberi komputer serangkaian pernyataan untuk melakukan suatu tugas.





































*/
















// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
console.log(tea4TeamFCC)
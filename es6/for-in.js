//for in digunakan untuk melooping object
const obj = {
    rahmat: {
        main: "java",
        other: "python"
    },
    fauzi: {
        main: "ruby",
        other: "go"
    },
    irfan: {
        main: "pascal",
        other: "prolog"
    }
};


// for (let prop in obj) {
//     if (obj[prop].main == "java") {
//         console.log(`keren si ${prop}`);
//     }
// }
const obj2 = {
    Alan: {
        online: true
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};

function countOnline(obj) {
    let number = 0;
    for (let prop in obj) {
        if (obj[prop].online == true) {
            number++;
        }
    }
    return number;
}
console.log(countOnline(obj2))
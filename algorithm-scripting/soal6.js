function translatePigLatin(str) {
    //return str += "way";
    let vocal = ["a", "i", "u", "e", "o"];
    // let consonan = [];

    if (vocal.indexOf(str[0]) >= 0) {
        return str += "way"
    }
    let cocok = str.match(/^[^aiueo]+/)[0];
    return str.substring(cocok.length) + `${cocok}ay`;
}

console.log(translatePigLatin("rhythm"));


// let str = "mnonkey";
// let cocok = str.match(/^[^aiueo]+/)[0];
// let hasil = str.substring(cocok.length) + `${cocok}ay`



/*
translatePigLatin("california") should return "aliforniacay".

translatePigLatin("paragraphs") should return "aragraphspay".

translatePigLatin("glove") should return "oveglay".

translatePigLatin("algorithm") should return "algorithmway".

translatePigLatin("eight") should return "eightway".

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".

Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".




*/
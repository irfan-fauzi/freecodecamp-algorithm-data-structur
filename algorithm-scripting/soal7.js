function myReplace(str, before, after) {
    let ganti = ""
    if (before[0] === before[0].toUpperCase()) {
        ganti = after.replace(after[0], after[0].toUpperCase())
        return str.replace(before, ganti)
    } else if (before[0] === before[0].toLowerCase()) {
        ganti = after.replace(after[0], after[0].toLowerCase())
        return str.replace(before, ganti)
    }
    //return str.replace(before,after)


}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

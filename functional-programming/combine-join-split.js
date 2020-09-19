function sentensify(str) {
    // Only change code below this line
    let x = [...str];
    let x2 = x.join("");
    return x2.split(/\W/).join(" ");


    // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));
// May the force be with you
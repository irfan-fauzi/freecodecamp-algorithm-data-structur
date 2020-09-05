function mutation(arr) {
    const [str, modi] = arr;
    let lowStr = str.toLowerCase();
    let lowMod = modi.toLowerCase()
    for (let i = 0; i < lowMod.length; i++) {
        if (lowStr.indexOf(lowMod[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "olleH"]));

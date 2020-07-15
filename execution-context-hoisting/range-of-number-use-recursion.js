function rangeOfNumbers(startNum, endNum) {

    // ----------- main code -----------  
    if (endNum == startNum - 1) {
        return [];
    }
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;

    // -------------------------------

};

console.log(rangeOfNumbers(2, 6));
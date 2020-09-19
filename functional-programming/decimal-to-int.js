const squareList = (arr) => {
    // Only change code below this line
    return arr.filter(el => el % 1 == 0).filter(el => el > 0).map(el => el * el);
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

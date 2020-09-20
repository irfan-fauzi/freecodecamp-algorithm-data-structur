function sumAll(arr) {
    if (arr[0] < arr[1]) {
        let arr1 = [];
        for (let i = arr[0]; i <= arr[1]; i++) {
            arr1.push(i);
        }
        return arr1.reduce((acc, curr) => acc + curr);
    } else if (arr[0] > arr[1]) {
        let arr2 = [];
        for (let j = arr[0]; j >= arr[1]; j--) {
            arr2.push(j);
        }
        return arr2.reduce((acc, curr) => acc + curr)
    } else {
        return arr[0] + arr[1];
    }

}

console.log(sumAll([1, 4]));

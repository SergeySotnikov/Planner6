const arr = [-12, -34, 0, -56, -1];

function maxNumber(arr) {
    let max = 0;
    arr.reduce((previousValue, currentValue) => {
        if (previousValue > currentValue) {
            max = previousValue;
            return previousValue;
        } else {
            max = currentValue;
            return currentValue;
        }
    });
    return max;
}

console.log(maxNumber(arr));
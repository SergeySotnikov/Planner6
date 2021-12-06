const arr = [-12, -34, 0, -56, -1, -100];

function minNumber(arr) {
    let min = 0;
    arr.reduce((previousValue, currentValue) => {
        if (previousValue < currentValue) {
            min = previousValue;
            return previousValue;
        } else {
            min = currentValue;
            return currentValue;
        }
    });
    return min;
}

console.log(minNumber(arr));
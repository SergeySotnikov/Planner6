const arr = [1, 2, 3, 4, 5];

function sum(arr) {
    return arr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });

}

console.log(sum(arr));
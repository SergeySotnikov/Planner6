function isNumber(value) {
    if (!isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumber('1.20 '));
function getRandomNumber(min, max) {

    if (min == null && max == null) {
        return 0;
    }

    if (max == null) {
        max = min;
        min = 0;
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber());
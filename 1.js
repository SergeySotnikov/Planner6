function numberConvert(number, entryBase, exitBase) {
    const parsed = parseInt(number, entryBase).toString(exitBase);
    return parsed;
}

console.log(numberConvert('E164', 16, 8));
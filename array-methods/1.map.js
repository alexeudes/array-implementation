Array.prototype.myMap = function (callback) {
    const newArrayMapped = [];

    for (const element of this) {
        const result = callback(element);
        newArrayMapped.push(result);
    }

    return newArrayMapped;
}
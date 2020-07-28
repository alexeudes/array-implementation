Array.prototype.myReduce = function (callback, initialValue) {
    let newArrayReduced = typeof initialValue !== 'undefined' ? initialValue : this[0];

    for (let index = 0; index <= this.length - 1; index++) {
        newArrayReduced = callback(newArrayReduced, this[index], this);
    }

    return newArrayReduced;
}
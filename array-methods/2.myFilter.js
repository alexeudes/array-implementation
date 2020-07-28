Array.prototype.myFilter = function (callback) {
    const newArrayFiltered = [];

    for (const element of this) {
        const result = callback(element, this);

        if (!result)
            continue;

        newArrayFiltered.push(element);
    }

    return newArrayFiltered;
}
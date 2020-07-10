function map(arr, func) {
    let result = []
    for (const idx of arr) {
        result.push(func(idx))
    }
    return result
}

function reduce(arr, func, start = 0) {
    let result,
        i;
    if (!!start) {
        result = start;
        i = 0;
    } else {
        result = func(arr[0], arr[1]);
        i = 2;
    }
    for (i; i < arr.length; i++) {
        result = func(result, arr[i])
    }
    return result
}

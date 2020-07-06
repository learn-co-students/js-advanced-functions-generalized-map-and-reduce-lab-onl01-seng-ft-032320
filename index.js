// Add your functions here

function map(array, f) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(f(array[i]))
    }
    return newArray
}

function reduce(array, fun, starting) {
    let total = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
    for (; i < array.length; i++){
        total = fun(array[i], total)
    }
    return total
}
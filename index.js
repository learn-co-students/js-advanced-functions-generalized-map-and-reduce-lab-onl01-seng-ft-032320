// Add your functions here
function map(arr, func) {
    let newArr = []
    arr.forEach(x => newArr.push(func(x)))
    return newArr
}

function reduce(arr, func, start=null) {
    let status
    if (start !== null) {
        status = start
    } else {
        status = arr.shift()
    }
    arr.forEach(x => status = func(x,status))
    return status
}
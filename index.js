// Add your functions here
function map(arr, callFn) {
    const newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callFn(arr[i]))
    }
    return newArr
}

function reduce(arr, callFn) {
    let total = 0
    for (let i = 0; i < arr.lenght; i++) {
        total = callFn(arr[i], total) 
    }
    return total
}

function reduce (arr, callFn, sp) {
    let total 
    let i = 0 
    if (sp) {
        total = sp 
    } else {
        total =arr[0]
        i++ 
    }

    for (i; i < arr.length; i++) {
        total = callFn(arr[i], total)
    }
    return total
}
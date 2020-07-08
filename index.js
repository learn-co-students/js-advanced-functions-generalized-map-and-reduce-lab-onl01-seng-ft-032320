
function map(arr, someFunc) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(someFunc(arr[i]))
    }
    return array
}

// function reduce(srcArr, reducer, startValue) {
//     if (!!startValue) {

//     }
//     for (let i = 0; i < srcArr.length; i++) {
//         accum = reducer(accum, srcArr[i])
//     }
//     return accum
// }

function reduce(srcArr, reducer, startValue) {
    let acc = (!!startValue) ? startValue : srcArr[0]
    let i = (!!startValue) ? 0 : 1
    for (; i < srcArr.length; i++) {
        acc = reducer(srcArr[i], acc)
    }
    return acc
}



function map(sourceArray, fn){
   let arr = []
   for (let i = 0; i < sourceArray.length; i++ ){
       arr.push(fn(sourceArray[i]))
   }
   return arr
}


function reduce(srcArr, reducer, startValue) {
    let acc = (!!startValue) ? startValue : srcArr[0]
    let i = (!!startValue) ? 0 : 1
    for (; i < srcArr.length; i++) {
        acc = reducer(srcArr[i], acc)
    }
    return acc
}
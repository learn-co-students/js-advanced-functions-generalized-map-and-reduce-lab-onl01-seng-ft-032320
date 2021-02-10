// Add your functions here
// Add your functions here

function map(src, functionOfChoice) {
    let array = []
    for (let i = 0; i < src.length; i++ ) {
      array.push(functionOfChoice(src[i]))
    }
    return array
  }
 
  function reduce(sourceArray, reducer, init){
    let accum = !!init ? init : sourceArray[0]
    let i = !!init ? 0 : 1
     for (; i < sourceArray.length; i++){
       accum = reducer(sourceArray[i], accum)
     }
     return accum
  }
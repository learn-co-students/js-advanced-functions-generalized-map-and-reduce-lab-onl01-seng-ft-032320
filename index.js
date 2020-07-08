// Add your functions here

 function map(src, functionOfChoice) {
   let array = []
   for (let i = 0; i < src.length; i++ ) {
     array.push(functionOfChoice(src[i]))
   }
   return array
 }
 
 function reduce(src, cb, starting){
   let r = (!!starting) ? starting : src[0]
   let i = (!!starting) ? 0 : 1
   for (; i < src.length; i++) {
     r = cb(src[i], r)
   }
   return r;
 }

 //this code got down to only 1 test failing;

//  function reduce(sourceArray, reducer, init=0){
//    let accum = init;
//    for (let i = 0; i < sourceArray.length; i++){
//        accum = reducer(sourceArray[i], accum)
//    }
//    return accum
//  }
  
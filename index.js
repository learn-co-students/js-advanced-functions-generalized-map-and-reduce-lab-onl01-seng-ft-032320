// Add your functions here
function map(src, call) {

    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(call(theElement))
    }
  
    return r;
}
  
function reduce(src, call, starting){

    let r = (!!starting) ? starting : src[0]

    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = call(src[i], r)
    }
  
    return r;
}
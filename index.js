// Add your functions here
function map(arr, callback) {
    const results = [];
    arr.forEach(el => results.push(callback(el)));
    return results;
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }
// Add your functions here

function map(array, fn) {
  let newArray = [];
  array.forEach(element => {
    newArray.push(fn(element));
  })
  return newArray;
}


// function reduce(array, fn, start=0) {
//   array.forEach(element => {
//     fn(start += element);
//   })
//   if (!start) {
//     return false;
//   } else if (!!start){
//     return true;
//   } else {
//     return start;
//   }
// }

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}

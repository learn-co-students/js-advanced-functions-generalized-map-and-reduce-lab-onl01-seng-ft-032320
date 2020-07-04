function map(array, fn){
   let result = []
   array.forEach(el => {
      result.push(fn(el))
   });
   return result
}

function reduce(src, cb, starting){
   let r = (!!starting) ? starting : src[0]
   let i = (!!starting) ? 0 : 1
 
   for (; i < src.length; i++) {
     r = cb(src[i], r)
   }
 
   return r;
 }

// let reduce = 
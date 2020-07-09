function map(array, callback) {
  let newArray = [];
  array.forEach((n) => {
    newArray.push(callback(n));
  });
  return newArray;
}

function reduce(src, cb, starting) {
  let r = !!starting ? starting : src[0];
  let i = !!starting ? 0 : 1;
  for (; i < src.length; i++) {
    r = cb(src[i], r);
  }
  return r;
}

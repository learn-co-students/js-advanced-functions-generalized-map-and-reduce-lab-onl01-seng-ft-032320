let negatives = (a) => (a * -1);
let originals = (a) => (a);
let doubles = (a) => (a*2);
let squared = (a) => (a *a);

funcArray = [negatives, originals, doubles, squared]
randomFunc = funcArray[Math.round(Math.random() * funcArray.length)];

function map(arr, randomFunc) {
  let new_arr = []
  for(let i in arr) {
    new_arr.push(randomFunc(arr[i]));
  };
  return new_arr;
};


function reduce(arr, randomFunc2, start) {
  let returnVal = (start) ? start : arr[0];
  for(let i = (start) ? 0 : 1; i < arr.length; i++) {
    returnVal = randomFunc2(arr[i], returnVal)
  };
  return returnVal;
};
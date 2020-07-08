// Add your functions here
//function map(sourceArray) {
//  return sourceArray.map(x => +- x);
//};

function map(sourceArray, block) {
  let r = []

  for (let i = 0; i < sourceArray.length; i++) {
    let theElement = sourceArray[i]
    r.push(block(theElement))
  }

  return r;
}

function reduce(sourceArray, block, starting){
  let r = (!!starting) ? starting : sourceArray[0]
  let i = (!!starting) ? 0 : 1

  for (; i < sourceArray.length; i++) {
    r = block(sourceArray[i], r)
  }

  return r;
}
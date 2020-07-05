// Add your functions here
function map(arr, block) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(block(arr[i]))
    }
    return result;
}

function reduce(arr, block, startingPoint=0){
    
    let result;
    let i;

    if(Boolean(startingPoint)){
      result = startingPoint
      i = 0
    } else {
      result = arr[0]
      i = 1
    }
  
    for(i; i < arr.length; i++){
      result = block(result, arr[i])
    }
    return result;
  }
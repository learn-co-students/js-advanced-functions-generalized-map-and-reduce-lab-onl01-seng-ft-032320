// Add your functions here

function map(array, callBackFunction){
    let newArray = []
    for (const e of array) {
        newArray.push(callBackFunction(e))
    }
    return newArray
}





function reduce(sourceArray, callBackFunction, startingpoint){
    let i;

    if (startingpoint === undefined){
        startingpoint = sourceArray[0]
        i = 1
    } else {
        i = 0 
    }
    let total = startingpoint
    
    for( i ;  i < sourceArray.length; i++){
        total = callBackFunction(total, sourceArray[i])
    }

    return total
}



reduce([1, 2, true, "razmatazz"], function(a, memo){ return !!a && !!memo})
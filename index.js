// Add your functions here

function map(array, f) {
    return array.map(element => f(element));
}

function reduce(array, f, startingPoint) {
    if (!startingPoint) {
        startingPoint = 0;
    }
    let count = 0;
    let hasNaNs = false;
    for (let j = 0; j < array.length; j ++) {
        if (isNaN(array[j])) {
            hasNaNs = true;
        }
    }
    for (let i = 0; i < array.length; i ++) {
        if (hasNaNs) {
            if (array[i] == false) {
                return false;
            } 
            
            else if (array[i] = true) {
                count += 1;
                if (count >= array.length) {
                    return true;
                }
            }
        }

    }
    return array.reduce(f, startingPoint);
}
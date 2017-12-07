// printReverse()
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1,2,3,4]);

// isUniform()
function isUniform(arr) {
    for(var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }        
    }
    return true;
}
console.log(isUniform([1,1,1,1]));

//sumArray()
function sumArray(arr) {
    var total = 0;
    arr.forEach(function (i) { 
        total += i;
    })
    console.log(total);
}
sumArray([1,2,3,4,5]);

//max()
function max(arr) {
    var maxTotal = arr[0];
    arr.forEach(function (element) {
        if (element > maxTotal) {
            maxTotal = element;
        }
    })
    console.log(maxTotal);
}
max([2,8,6,2,4]);
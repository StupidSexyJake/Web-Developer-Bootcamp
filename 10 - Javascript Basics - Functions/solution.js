function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isEvenShorthand (num) {
    return num % 2 === 0;
}

function factorial(num) {
    var total = 1;
    for(i = 1; i < (num + 1); i++) {
        total *= i;
    }
    return total;
}

function kebabToSnake(filename) {
    return filename.replace(/-/g, "_");
}
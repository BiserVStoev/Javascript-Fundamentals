function concatenateAndReverse(arr) {
    let allStrings = arr.join('');
    let chars = Array.from(allStrings).reverse().join('');

    return chars;
}

console.log(concatenateAndReverse(['I', 'am', 'student']));

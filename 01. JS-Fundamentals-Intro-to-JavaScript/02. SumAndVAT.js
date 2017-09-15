function sumAndVat(input){
    "use strict";
    let sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log('sum = ' + sum);
    console.log('vat = ' + vat);
    console.log('total = ' + total);
}

sumAndVat([1.20, 2.60, 3.50])

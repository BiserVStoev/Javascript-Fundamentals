function findBiggestProduct(input) {
    input = input.map(Number);
    let biggestProduct = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < input.length; index++) {
        let currentNumber = input[index];
        if(currentNumber > 0 && currentNumber < 10){
            let currentProduct = 1;
            for (let innerIndex = index + 1; innerIndex <= index + currentNumber; innerIndex++) {
                currentProduct *= input[innerIndex];
            }

            if(biggestProduct < currentProduct){
                biggestProduct = currentProduct;
            }
        }
    }

    console.log(biggestProduct);
}

findBiggestProduct([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
])
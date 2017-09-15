function processOddNumbers(arr) {
    let result = arr.filter((v, i) => i % 2 != 0).reverse().map(x => x * 2).join(' ');

    console.log(result);
}

processOddNumbers([10, 15, 20, 25]);

//arr => console.log(arr.filter((v, i) => i % 2 != 0).reverse().map(x => x * 2).join(' '));
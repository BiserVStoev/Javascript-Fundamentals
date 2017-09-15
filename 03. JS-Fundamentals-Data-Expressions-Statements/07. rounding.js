function roundToSpecific(input) {
    let [number, precision] = input;
    if(precision > 15){
        precision = 15;
    }

    let delimiter = Math.pow(10, precision);

    let result = Math.round(number * delimiter);
    result = result / delimiter;

    console.log(result)
}

roundToSpecific([3.000000065, 3]);
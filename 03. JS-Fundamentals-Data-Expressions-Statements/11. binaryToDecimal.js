function convertToDecimal(binary) {
    let decimal = 0;
    let pow = 0;

    for (let i = binary.length -1; i >= 0; i--) {

        if(binary[i] == '1'){
            decimal += Math.pow(2, pow);
        }

        pow++;
    }

    console.log(decimal);
}

convertToDecimal('1111000000000')
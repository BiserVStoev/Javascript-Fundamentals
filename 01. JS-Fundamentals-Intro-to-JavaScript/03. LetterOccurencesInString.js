function letterCountInString(str, letter){
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if(str[i] == letter){
            count++;
        }
    }

    console.log(count)
}

letterCountInString('hello', 'l')
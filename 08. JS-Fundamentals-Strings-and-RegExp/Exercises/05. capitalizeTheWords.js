function capitalize(input) {
    let inputSplitted = input.split(' ');
    let upped = [];
    for (let i = 0; i < inputSplitted.length; i++) {
        let firstChar = inputSplitted[i][0].toUpperCase();
        let restOfWord = inputSplitted[i].substr(1, inputSplitted[i].length).toLowerCase();
        let combined = firstChar + restOfWord;
        upped.push(combined);
    }

    console.log(upped.join(' '));
}

capitalize('Was that Easy? tRY thIs onE for SiZe!');
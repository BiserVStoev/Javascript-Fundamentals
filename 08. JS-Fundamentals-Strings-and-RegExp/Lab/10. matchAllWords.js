function matchAllWords(input) {
    let pattern = /\w+/g;
    let words = input.match(pattern);

    console.log(words.join('|'));
}

matchAllWords('_(Underscores) are also word characters');
function extractTextFromParenthesis(text) {
    let result = [];
    let startIndex = text.indexOf('(');
    let endIndex = text.indexOf(')', startIndex);
    while (startIndex > -1) {
        endIndex = text.indexOf(')', startIndex);
        if (endIndex == -1){
            break;
        }

        let snippet = text.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = text.indexOf('(', endIndex);
    }

    console.log(result.join(', '));
}
function censor(text, words) {

    for (let current of words) {
        let replaced = '-'.repeat(current.length);
        while (text.indexOf(current) > -1) {
            text = text.replace(current, replaced);
        }
    }
    return text;
}

censor('I like C#, HTML, JS and PHP',
    ['C#', 'HTML', 'PHP']);

function secret(input) {
    let namePattern = /\*[A-Z][A-Za-z]*(?=\s|\t|$)/g;
    let phonePattern = /\+[0-9-]{10}(?=\s|\t|$)/g;
    let idPattern = /![a-zA-Z0-9]+(?=\s|\t|$)/g;
    let basePattern = /_[a-zA-Z0-9]+(?=\s|\t|$)/g;

    input.forEach(x => {
        x = x.replace(namePattern, toDashes);
        x = x.replace(phonePattern, toDashes);
        x = x.replace(idPattern, toDashes);
        x = x.replace(basePattern, toDashes);

        console.log(x);
    });
    
    function toDashes(match) {
        return '|'.repeat(match.length);
    }
}

secret(
    [
        'Agent *Ivankov was in the room when it all happened.',
        'The person in the room was heavily armed.',
        'Agent *Ivankov had to act quick in order.',
        'He picked up his phone and called some unknown number.',
        'I think it was +555-49-796',
        'I can\'t really remember...',
        'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
        'Then after that he disappeared from my sight.',
        'As if he vanished in the shadows.',
        'A moment, shorter than a second, later, I saw the person flying off the top floor.',
        'I really don\'t know what happened there.',
        'This is all I saw, that night.'
]
);
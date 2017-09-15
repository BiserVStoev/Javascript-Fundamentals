function findUniqueSequences(input) {
    let map = new Map();

    function sortNumber(a,b) {
        return a - b;
    }

    for (let sequence of input) {
        let currentSequence = JSON.parse(sequence);
        currentSequence = currentSequence.sort((a, b) => sortNumber(a, b)).reverse();
        let sequenceAsString = '' + currentSequence;
        if (!map.has(sequenceAsString)) {
            map.set(sequenceAsString, currentSequence.length);
        }
    }

    function sortSequences(a,b) {
        return a[1] - b[1];
    }

    [...map].sort((a,b) => sortSequences(a,b)).forEach(x => console.log(`[${x[0].split(',').join(', ')}]`))
}

//findUniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]', '[10, 1, -17, 0, 2, 13]', '[4, -3, 3, -2, 2, -1, 1, 0]']);
findUniqueSequences(['[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);
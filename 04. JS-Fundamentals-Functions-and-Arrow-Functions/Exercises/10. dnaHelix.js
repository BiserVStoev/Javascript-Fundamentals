function dna(input) {
    let rows = input;
    let sequence = 'ATCGTTAGGG';
    let curentindex = 0;

    for (let i = 0; i < rows; i++) {
        let currentRow = i % 4;

        if (currentRow === 0) {
            console.log('**' + sequence[curentindex++ % sequence.length] + sequence[curentindex++ % sequence.length] + '**');
        }
        else if (currentRow === 1 || currentRow === 3) {
            console.log('*' + sequence[curentindex++ % sequence.length] + '--' + sequence[curentindex++ % sequence.length] + '*');
        }
        else {
            console.log(sequence[curentindex++ % sequence.length] + '----' + sequence[curentindex++ % sequence.length]);
        }
    }
}

dna(10);
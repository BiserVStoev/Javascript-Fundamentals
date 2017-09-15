function drawFigureOf4Squares(size) {
    let figureHeight = size;
    if (figureHeight % 2 == 0) {
        figureHeight--;
    }

    for (let i = 0; i < figureHeight; i++) {
        let borderCondition1 = (i == 0);
        let borderCondition2 = (i == (Math.floor(figureHeight / 2)));
        let borderCondition3 = (i == (figureHeight - 1));

        if(borderCondition1 || borderCondition2 || borderCondition3){
            let row = '+';
            row += '-'.repeat(size -2);
            row += '+';
            row += '-'.repeat(size -2);
            row += '+';
            console.log(row);
        }
        else {
            let row = '|';
            row += ' '.repeat(size -2);
            row += '|';
            row += ' '.repeat(size -2);
            row += '|';
            console.log(row);
        }
    }
}

drawFigureOf4Squares(44);
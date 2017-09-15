function printMultiplicationTable(size) {
    console.log('<table border="1">');
    
    let firstRow = '<tr><th>x</th>';

    for (let i = 1; i <= size; i++) {
        firstRow += `<th>${i}</th>`
    }

    firstRow += '</tr>';

    console.log(firstRow);

    for (let i = 1; i <= size; i++) {

        let row = `<tr><th>${i}</th>`;

        for (let j = 1; j <= size; j++) {

            row += `<td>${i*j}</td>`
        }
        
        row += '</tr>';

        console.log(row);
    }

    console.log('</table>');
}

printMultiplicationTable(5);
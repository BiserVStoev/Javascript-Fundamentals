function magic_Matrix(input) {

    let matrix = input;

    let sum = matrix[0].reduce((a, b) => (a + b));

    if (input.length == 2) {
        for (let row = 1; row < matrix.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));
            if (sum != sumRow) {
                return false;
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            let sumCol = 0;
            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }

            if (sumCol != sum) {
                return false;
            }
        }

        return true;
    }
    else {
        for (let row = 1; row <= input.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));

            if (sum != sumRow) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}

console.log(magic_Matrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
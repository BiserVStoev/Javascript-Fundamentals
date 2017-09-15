function sumLastKNumbersSequence(n, k) {
    let seq = [1];

    let calcNum = function (arr, index, length) {
        let start = Math.max(0, index - length);
        let tempArray = arr.slice(start, start + length);
        let result = tempArray.reduce((a, b) => a + b);

        return result;
    }
    for (let current = 1; current < n; current++) {

        let sum = calcNum(seq, current, k);
        seq[current] = sum;
    }

    console.log(seq.join(' '));
}

sumLastKNumbersSequence(6, 3)
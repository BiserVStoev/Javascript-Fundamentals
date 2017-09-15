function rotate(input) {
    let rotateCount = input.pop();

    for (var i = 0; i < rotateCount % input.length; i++) {
        let lastNumber = input.pop();
        input.unshift(lastNumber);
    }

    console.log(input.join(' '));
}

rotate(['1', '2', '3', '4', '2']);

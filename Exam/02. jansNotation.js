function parse(input) {
    let stack = [];

    for (let command of input) {
        if(isNumeric(command)){
            stack.push(command);
        } else {
            if (stack.length < 2){
                console.log('Error: not enough operands!');
                return;
            }

            let secondNum = stack.pop();
            let firstNum = stack.pop();
            let product = operate(firstNum, secondNum, command);
            stack.push(product);
        }
    }

    if(stack.length === 1){
        console.log(stack.pop());
    }else {
        console.log('Error: too many operands!');
    }

    function operate(firstNum, secondNum, operand) {
        switch (operand){
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
    }
}

function isNumeric(str){
    return /^-*\d+$/.test(str);
}
}

//parse([3,
//    4,
//    '+']
//);

parse([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);
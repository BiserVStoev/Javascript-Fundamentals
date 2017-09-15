function joinAndPrint(input) {
    let delimiter = input.pop();
    let output = input.join(delimiter);

    console.log(output);
}

joinAndPrint(['One', 'Two', 'Three', 'Four', 'Five', '-']);
function findVaribles(input) {
    let pattern = /\b_([a-zA-Z0-9]+)\b/g;

    console.log(input.match(pattern).map(x => x.replace(/_/g, '')).join(','));
}

findVaribles('The _id and _age variables are both integers.');
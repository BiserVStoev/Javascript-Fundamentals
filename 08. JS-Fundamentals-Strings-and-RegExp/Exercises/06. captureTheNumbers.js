function capture(input) {
    let result = input.map(x => x.match(/\d+/g)).filter(x => x !== null).map(x => x.join(' ')).join(' ');

    console.log(result);
}

capture(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);
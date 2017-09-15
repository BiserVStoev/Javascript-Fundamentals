function decode(input) {
    let specialKey = input.shift();
    let pattern = `(\\s|^)(${specialKey}\\s+)([A-Z.,!%$#]{8,})(?=[\\s.,]|$)`;
    let regex = new RegExp(pattern, 'gi');
    for (let line of input) {
        let currentEncoded = line.replace(regex, replaceSpecials);
        if(currentEncoded != null){
            console.log(currentEncoded);
        }
    }

    function replaceSpecials(match, gr1, gr2, gr3) {
        if(gr3 !== gr3.toUpperCase()){
            return gr1 + gr2 + gr3;
        }

        let output = gr3
            .replace(/!/g, 1)
            .replace(/%/g, 2)
            .replace(/#/g, 3)
            .replace(/\$/g, 4)
            .replace(/[A-Z]+/g, (m) => m.toLowerCase());

        return gr1 + gr2 + output;
    }
}

decode([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);
function townsToJson(input) {
    input.shift();
    let towns = [];
    for (let row of input) {
        let townTokens = row.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());

        let town =  {
            Town: townTokens[0],
            Latitude: Number(townTokens[1]),
            Longitude: Number(townTokens[2])
        }

        towns.push(town);
    }

    console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
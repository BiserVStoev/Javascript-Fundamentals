function logPeople(input) {
    let data = new Map();

    for (let command of input) {
        if(command.length === 1){
            if (!data.has(command)){
                data.set(command, new Set());
            }
        } else {
            let [firstPerson, secondPerson] = command.split('-');
            if(!data.has(firstPerson) || !data.has(secondPerson)){
                continue;
            }

            if (firstPerson === secondPerson){
                continue;
            }

            data.get(secondPerson).add(firstPerson);
        }
    }

    let sorted = [...data].sort((a, b) => sortPeople(a, b, data));

    function sortPeople(a, b, map) {
        let firstComparison = b[1].size - a[1].size;

        if (firstComparison !== 0){
            return firstComparison;
        }

        let firstOccurences = 0;
        let secondOccurences = 0;
        for (let info of map) {
            if(info[1].has(a[0])){
                firstOccurences++;
            }

            if(info[1].has(b[0])){
                secondOccurences++;
            }
        }

        return secondOccurences - firstOccurences;
    }

    let firstPerson = sorted[0];
    let person = firstPerson[0];
    let subscribers = firstPerson[1];

    console.log(person);
    let counter = 1;

    for (let subscriber of subscribers) {
        console.log(`${counter}. ${subscriber}`);
        counter++;
    }
}

logPeople(
    [
        'A',
        'B',
        'C',
        'D',
        'A-B',
        'B-A',
        'C-A',
        'D-A'
    ]);

//logPeople(
//    [
//        'A',
//        'B',
//        'A-B',
//        'B-A'
//    ]
//);

logPeople(
    [
        'A',
        'B',
        'C',
        'A-B',
        'B-A',
        'A-C'
    ]
);
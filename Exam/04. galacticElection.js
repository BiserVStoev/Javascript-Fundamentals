function elect(input) {

    let data = new Map();

    for (let vote of input) {
        let currentSystem = vote.system;
        let currentCandidate = vote.candidate;
        let currentVotes = vote.votes;

        if(!data.has(currentSystem)){
            data.set(currentSystem, new Map());
        }

        if(!data.get(currentSystem).has(currentCandidate)){
            data.get(currentSystem).set(currentCandidate, 0);
        }

        let previousVotes = data.get(currentSystem).get(currentCandidate);
        data.get(currentSystem).set(currentCandidate, previousVotes + currentVotes);
    }

    let winnersData = new Map();

    for (let [starSystem, candidates] of data) {
        let currentMaxCandidate = '';
        let currentMaxVotesForCandidate = 0;
        let allVotesForCurrentSystem = 0;
        for (let [candidate, votes] of candidates) {
            allVotesForCurrentSystem += votes;
            if(currentMaxVotesForCandidate < votes){
                currentMaxCandidate = candidate;
                currentMaxVotesForCandidate = votes;
            }

            winnersData.set(starSystem, new Map());
            winnersData.get(starSystem).set(currentMaxCandidate, allVotesForCurrentSystem);
        }
    }

    let secondData = new Map();
    for (let [key, theMap] of winnersData) {
        for (let winner of theMap) {
            let name = winner[0];
            let timesVoted = winner[1];
            if(!secondData.has(name)){
                secondData.set(name, timesVoted);
            } else {
                let previousVotes = secondData.get(name);
                secondData.set(name, previousVotes + timesVoted);
            }
        }
    }

    let allVotes = 0;

    for (let [starSystem, candidates] of data) {
        for (let [candidate, votes] of candidates) {
            allVotes += votes;
        }
    }

    secondData = [...secondData].sort((a, b) => sort(a, b));
;
    let winner = [...secondData][0][0];
    let winnerVotes = [...secondData][0][1];
    if(secondData.length === 1){
        console.log(`${winner} wins with ${winnerVotes} votes`);
        console.log(`${winner} wins unopposed!`);
    } else if ((allVotes / 2) < winnerVotes){
        let secondWinner = [...secondData][1][0];
        console.log(`${winner} wins with ${winnerVotes} votes`)
        console.log(`Runner up: ${secondWinner}`);
        let temporaryMap = new Map();
        for (let [starSystem, candidates] of winnersData) {
            for (let [candidate, votes] of candidates) {
                if(candidate === secondWinner){
                    temporaryMap.set(starSystem, votes);
                }
            }
        }

        temporaryMap = [...temporaryMap].sort((a, b) => sort(a, b));

        for (let [starSystem, votes] of temporaryMap) {
            console.log(`${starSystem}: ${votes}`);
        }

    } else{
        let secondWinner = [...secondData][1][0];
        let secondWinnerVotes = [...secondData][1][1];
        let secondPercentage = Math.floor(secondWinnerVotes / allVotes * 100);
        let firstPercentage = Math.floor(winnerVotes / allVotes * 100);
        console.log(`Runoff between ${winner} with ${firstPercentage}% and ${secondWinner} with ${secondPercentage}%`);
    }

    function sort(a, b) {

        let firstVotes = a[1];
        let secondVotes = b[1];

        return secondVotes - firstVotes;
    }

}

//elect(
//    [ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
//        { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
//        { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
//        { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
//        { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
//        { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
//);

elect(
    [ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
        { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
        { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
        { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
        { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
        { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
        { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]

);

//elect(
//    [ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
//        { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
//        { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
//);
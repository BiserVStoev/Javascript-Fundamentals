function calculateCompoundInterest(input) {
    let [p, iPercent, compoundPeriod, t] = input;

    let n = 12/compoundPeriod;
    let i = iPercent / 100;
    let brackedEqasion = 1 + (i/n)
    let totalMultiplicator = Math.pow(brackedEqasion, n * t)

    var sumAferInterst = p * totalMultiplicator;
    console.log(sumAferInterst.toFixed(2));
}

calculateCompoundInterest([100000, 5, 12, 25]);
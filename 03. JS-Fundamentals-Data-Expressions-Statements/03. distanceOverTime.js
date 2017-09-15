function calculateDistance(input) {
    let [v1, v2, t] = input;

    let d1 = (v1 * (t / 3600)) * 1000;
    let d2 = (v2 * (t / 3600)) * 1000;

    let difference = Math.abs(d1 - d2);
    
    console.log(difference);
}

calculateDistance([5, -5, 40]);
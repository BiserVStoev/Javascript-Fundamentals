function changeMaterial(input) {
    let target = input[0];

    for (var i = 1; i < input.length; i++) {
        let microns = input[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);

        if(microns + 1 == target){
            microns = xray(microns);
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${microns} microns`);

    }
    function cut(crytal) {
        return crytal / 4;
    }
    
    function lap(crystal) {
        return crystal * 0.8;
    }

    function grind(crystal) {
        return crystal -= 20;
    }
    
    function etch(crystal) {
            return crystal -= 2;
    }

    function xray(crystal) {
        return ++crystal;
    }

    function transportingAndWashing(crystal) {
        console.log('Transporting and washing');

        return Math.floor(crystal);
    }

    function executeOperation(microns, opStr, op) {
        let newSize = op(microns);
        let counter = 0;

        while(newSize >= target
            || Math.floor(target - newSize) === 1){
            microns = newSize;
            newSize = op(microns);
            counter++;
        }

        if(counter > 0){
            console.log(`${opStr} x${counter}`);

            return transportingAndWashing(microns);
        }

        return microns;
    }
}

changeMaterial([1000, 4000, 8100]);
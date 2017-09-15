function createPyramid(baseWidth, increment) {
    let stone = 0;
    let marble = 0;
    let lapizLuzili = 0;
    let gold = 0;
    let step = 0;
    let height = 0;

    while(baseWidth > 0){
        step++;
        height += increment;
        let totalArea = baseWidth * baseWidth;
        let innerArea = (baseWidth - 2) * (baseWidth - 2);
        let outerArea = totalArea - innerArea;

        if(baseWidth === 1 || baseWidth === 2){
            gold += totalArea * increment;
        } else if (step % 5 === 0){
            stone += innerArea * increment;
            lapizLuzili += outerArea * increment;
        } else {
            stone += innerArea * increment;
            marble += outerArea * increment;
        }

        baseWidth -=2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapizLuzili)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}

//createPyramid(11 , 0.75);
//createPyramid(23,
//0.5);
createPyramid(12, 1);
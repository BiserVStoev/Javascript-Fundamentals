function checkIfPointInRectangle(data) {
    let [pointX, pointY, xMin, xMax, yMin, yMax] = data;

    let condition1 = pointX < xMin;
    let condition2 = pointX > xMax;
    let condition3 = pointY > yMax;
    let condition4 = pointY < yMin;

    if(condition1 || condition2 || condition3 || condition4){
        console.log('outside');
    }
    else {
        console.log('inside');
    }
}

checkIfPointInRectangle([8,-1,2,12,-3,3]);

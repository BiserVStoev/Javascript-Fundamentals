function calculateAreaAndPerimeter(sideA, sideB) {
    let area = sideA * sideB;
    let perimeter = 2 * sideA + 2 * sideB;


    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

calculateAreaAndPerimeter(2.5, 3.14)
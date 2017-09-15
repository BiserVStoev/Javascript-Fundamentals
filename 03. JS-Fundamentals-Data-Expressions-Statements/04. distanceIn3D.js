function calculateDistance3D(input) {
    let [x1, y1, z1, x2, y2, z2] = input;

    let verticalOffset = Math.abs(y1 - y2);
    let horizontalOffset = Math.abs(x1 - x2);
    let xYDistance = Math.sqrt(Math.pow(verticalOffset, 2) + Math.pow(horizontalOffset, 2));

    let zOffset = Math.abs(z1 - z2);

    let xYZDistance = Math.sqrt(Math.pow(xYDistance, 2) + Math.pow(zOffset, 2));

    console.log(xYZDistance);
}

calculateDistance3D([3.5, 0, 1, 0, 2, -1]);



function convertToFeet(inches) {
    let inchesRemaining = inches % 12;
    let feet = Math.floor(inches / 12);
    
    console.log(`${feet}'-${inchesRemaining}"`);
}

convertToFeet(11);
function generateObject(data) {
    let [prop1, val1, prop2, val2, prop3, val3] = data;

    let obj = {};

    obj[prop1] = val1;
    obj[prop2] = val2;
    obj[prop3] = val3;

    console.log(obj);
}

generateObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
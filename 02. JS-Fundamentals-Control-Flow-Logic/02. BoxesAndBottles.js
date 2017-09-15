function calculateNeededBoxes(bottles, capacity) {
    let num = bottles / capacity;
    if(bottles % capacity === 0){
        console.log(num);
    }
    else {
        console.log(parseInt(num) + 1)
    }
}

calculateNeededBoxes(20, 5);
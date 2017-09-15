function a(input) {
    input = input.map(Number);
    let arr = [];
    let biggest;
    input.forEach(function(e){
        if (biggest != undefined){
            if (e >= biggest){
                arr.push(e);
                biggest = e;
            }
        }
        else{
            biggest = e;
            arr.push(e);
        }
    });
    arr.forEach(e => console.log(e));
}

a(['20','3','2','15','6','1']);

//function extractSubsequence(arr) {
//    arr = arr.map(Number);
//
//    let result = arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1))).join('\n');
//
//    console.log(result);
//}
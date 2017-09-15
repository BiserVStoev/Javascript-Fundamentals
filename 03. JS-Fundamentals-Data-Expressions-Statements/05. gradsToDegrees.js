function convertGradsToDegrees(grads) {

    if(grads >= 400){

        grads = grads % 400;
    }

    if (grads < 0){
        grads = grads % 400;
        grads += 400;
    }

    let conversionConstant = 0.9;
    let degrees = grads * conversionConstant;

    console.log(degrees);
}

convertGradsToDegrees(-50);
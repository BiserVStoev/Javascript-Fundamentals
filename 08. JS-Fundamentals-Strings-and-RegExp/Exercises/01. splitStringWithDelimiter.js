function transform(text, delimeter) {
    let splittedElements = text.split(delimeter);

    for (let i = 0; i < splittedElements.length; i++) {

        console.log(splittedElements[i]);
    }
}

transform('one-two-three-four-five', '-');
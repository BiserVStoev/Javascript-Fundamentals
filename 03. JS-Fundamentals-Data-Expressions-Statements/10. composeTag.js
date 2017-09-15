function generateImageTag(data) {

    let [location, alt] = data;
    console.log(`<img src="${location}" alt="${alt}">`);
}

generateImageTag(['smiley.gif', 'Smiley Face'])
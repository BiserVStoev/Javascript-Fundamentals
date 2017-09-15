function countWordOccurences(text, word) {
    let pattern = "\\b" + word + '\\b';
    let regex = new RegExp(pattern, "gi")

    let occurences = text.match(regex);


    console.log(occurences.length);
}

countWordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
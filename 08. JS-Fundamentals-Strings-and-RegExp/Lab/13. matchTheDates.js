function getValidDates(input) {
    let pattern = /\b\d{1,2}-[A-Z][a-z]{2}-\d{4}\b/g;

    for (let text of input) {
        let dates = text.match(pattern);
        if(pattern.test(text)){
            for (let date of dates) {
                let dateData = date.split('-');
                let day = dateData[0], month = dateData[1], year = dateData[2];

                console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
            }


        }
    }
}

getValidDates(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);
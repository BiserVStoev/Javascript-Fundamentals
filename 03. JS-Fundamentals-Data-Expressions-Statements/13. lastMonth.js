function getLastDayOfPreviousMonth(data) {
    let [day, month, year] = data;
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}

getLastDayOfPreviousMonth([16, 6, 2017])
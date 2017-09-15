function calculateTicketPrice(data) {

    let title = data[0].toLowerCase();
    let weekDay = data[1].toLowerCase();

    let movies = [];

    movies.push(
         {
            name: 'The Godfather',
            monday: 12,
            tuesday: 10,
            wednesday: 15,
            thursday: 12.50,
            friday: 15,
            saturday: 25,
            sunday: 30
        });

    movies.push(
         {
            name: 'Schindler\'s List',
            monday: 8.50,
            tuesday: 8.50,
            qednesday: 8.50,
            thursday: 8.50,
            friday: 8.50,
            saturday: 15,
            sunday: 15
        });

    movies.push(
         {
            name: 'Casablanca',
            monday: 8,
            tuesday: 8,
            wednesday: 8,
            thursday: 8,
            friday: 8,
            saturday: 10,
            sunday: 10
        });

    movies.push(
         {
            name: 'The Wizard of Oz',
            monday: 10,
            tuesday: 10,
            wednesday: 10,
            thursday: 10,
            friday: 10,
            saturday: 15,
            sunday: 15
        });


    let notFound = true;

    for (let movie of movies){
        if((movie.name.toLowerCase() == title) && (movie[weekDay] != null)){
            console.log(movie[weekDay])
            notFound = false;
            break;
        }
    }

    if(notFound){
        console.log('error');
    }
}

calculateTicketPrice(['The Godfather', 'Friday']);
calculateTicketPrice(['casablanca', 'sunday']);
calculateTicketPrice(['Schindler\'s LIST', 'monday']);
calculateTicketPrice(['SoftUni', 'Nineday']);
calculateTicketPrice(['The Wizard of oz', 'saturday']);
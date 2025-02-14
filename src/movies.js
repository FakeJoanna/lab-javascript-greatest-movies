// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map(x => x.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return [...new Set(moviesArray.map(x => x.director))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(x => x.director === "Steven Spielberg" && x.genre.includes("Drama") === true).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    else {
        return Math.round(100 * (moviesArray.filter(x => x.hasOwnProperty("score") === true).reduce((acc, cV) => acc + cV.score, 0)/moviesArray.length))/100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray = moviesArray.filter(x => x.hasOwnProperty("score") === true && x.genre.includes("Drama"));
    if (dramaArray.length === 0) {
        return 0;
    }
    
    return Math.round(100 * (dramaArray.reduce((acc, cV) => acc + cV.score, 0)/dramaArray.length))/100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => a.title > b.title).sort((a, b) => a.year > b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(x => x.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    function timeStringToInt(duration) {
        let matchArray = duration.match(/\d+/g);
        if (matchArray.length === 1) {
            return parseInt(matchArray[0], 10) * 60;
        }

        return parseInt(matchArray[0], 10) * 60 + parseInt(matchArray[1], 10);
    }

    return moviesArray.map(x => ({...x, duration: timeStringToInt(x.duration)}));
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    let scores = moviesArray.reduce ((acc, movie) => {
        if (!acc.movie.year) { //at first call the acc is an emtpy object, and current value is array[0]. this line checks if this object (which will be an object of objects) 
            
        }
    }, {total});
}
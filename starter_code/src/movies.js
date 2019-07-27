/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let sum = array.reduce((acc, movie) => {
    if (movie.rate == "") movie.rate = 0;
    return (acc += parseFloat(movie.rate));
  }, 0);
  let average = sum / array.length;
  return parseFloat(average.toFixed(2));
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(movie => movie.genre.indexOf("Drama") != -1);
  if (dramaMovies == "") return 0;
  return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(array) {
  array.sort((movieA, movieB) => {
    if (movieA.duration > movieB.duration) return 1;
    if (movieA.duration < movieB.duration) return -1;
    if (movieA.title > movieB.title) return 1;
    if (movieA.duration < movieB.title) return -1;
    return 0;
  });
  return array;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  return array.filter(
    movie =>
      movie.genre.indexOf("Drama") != -1 &&
      movie.director === "Steven Spielberg"
  ).length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  array.sort((movieA, movieB) => {
    if (movieA.title > movieB.title) return 1;
    if (movieA.duration < movieB.title) return -1;
    return 0;
  });
  let newArray = [];
  array.forEach(movie => newArray.push(movie.title));
  if (newArray.length >= 20) return (newArray = newArray.slice(0, 20));
  return newArray;
}
/*
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {

  return array.map(movie => {
    let newMovie = {...movie}

    

    return newMovie
  })
  
  /*let newArray = array,
    duration = [],
    hours = [],
    minutes = [];
  newArray.forEach(movie => duration.push(movie.duration));

  for (let i = 0; i < duration.length; i++) {
    hours[i] = 0;
    minutes[i] = 0;
    for (let j = 0; j < duration[i].length; j++) {
      if (duration[i][j] == "h") {
        hours[i] = parseInt(duration[i][j - 1]);
      }
      if (duration[i][j] == "m") {
        minutes[i] = parseInt(
          duration[i][j - 2] + parseInt(duration[i][j - 1])
        );
      }
    }
  }

  for (i = 0; i < newArray.length; i++) {
    newArray[i].duration = hours[i] * 60 + minutes[i];
  }

  return newArray;
}*/

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// Exercise 1: Get the array of all directors.
//IMPLEMENTAR BUCLE MAP
function getAllDirectors(movies) {
  let result =  movies.map( movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 let result = movies.filter( movie => movie.director == director);
 console.log("EXERCICI 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let initialValue = 0;
  let resultFilter = movies.filter( movie => movie.director == director);
  console.log(resultFilter);

  let sumaScore = resultFilter.reduce((acc,movie) => {
    const scoreActual = movie.score;
    return acc + scoreActual;

},initialValue);
 const scorePromedio = sumaScore / resultFilter.length;

 console.log(`La puntuación promedio de los las peliculas es de ${scorePromedio}`);

 return scorePromedio;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let result =[...array].sort((a, b) => a.title.localeCompare(b.title))
  .map(movie => movie.title)
  .slice(0, 20);
  return result;
} 

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let result =[...array].sort((a, b) => { 
    if(a.year !== b.year){
      return a.year - b.year;
    } else{ 
      return a.title.localeCompare(b.title);
  }});
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

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

 console.log(`La puntuación promedio de los las peliculas es de ${scorePromedio.toFixed(2)}`);

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


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genero) {
  let initialValue = 0;
let resultFilter = movies.filter(movie => movie.genre.includes(genero));

let sumaScore = resultFilter.reduce((acc,movie) => {
  const scoreActual = movie.score;
  return acc + scoreActual;

},initialValue);
const scorePromedio = sumaScore / resultFilter.length;

console.log(`La puntuación promedio de las peliculas de genero Crime es de ${scorePromedio.toFixed(2)}`);

return scorePromedio;

}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  return movies.map( movie => {
    let horas = 0;
    let minutos = 0;
  
  const parts = movie.duration.split(" ");
  
parts.forEach(part => {
    if(part.includes('h')){
      horas = parseInt(part.replace("h", ""));
    }else if (part.includes('min')) {
      minutos = parseInt(part.replace("min", ""));
    } 
  });

 const totalMinutos = (horas * 60) + minutos;
  return {...movie, duration: totalMinutos};

});
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, any) {

  let resultFilter  = [...movies].filter( movie => movie.year == any);
  
  let initialValue = 0;
  
  let maxScore = resultFilter.reduce((acc, movie) => { 
    return movie.score > acc ? movie.score : acc ;},initialValue);
  
  let bestMovies = resultFilter.filter(movie => movie.score === maxScore);
  
    return bestMovies;
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

const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const first = prompt('Один из последних фильмов, которые Вы смотрели?', '');
const second = prompt('На сколько оцените его?', '');
const third = prompt('Один из последних фильмов, которые Вы смотрели?', '');
const forth = prompt('На сколько оцените его?', '');

personalMovieDB.movies[first] = second;
personalMovieDB.movies[third] = forth;

console.log(personalMovieDB);
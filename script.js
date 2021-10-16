const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



for (let i = 0; i < 2; i++) {
    const first = prompt('Один из последних фильмов, которые Вы смотрели?', ''),
        second = prompt('На сколько оцените его?', '');

    if (first != null && first != '' && first.length < 50 && second != null && second != '' && second.length < 50) {

        personalMovieDB.movies[first] = second;
        console.log('perfect');
    } else {
        console.log('problems');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count < 1000) {
    console.log('Вы киноман');
} else {
    console.log('Ошибочка вышла');
};
switch (personalMovieDB.count) {
    case 42:
        console.log('Юбью Киську');
}

console.log(personalMovieDB);





// for (let i = 0; i < 2; i++) {
//     const first = prompt('Один из последних фильмов, которые Вы смотрели?', ''),
//         second = prompt('На сколько оцените его?', '');

//     if (first != null && second != null && first != '' && second != '' && first.length < 50 && second.length < 50 && first != 'Киська' && second != 'Киська') {

//         personalMovieDB.movies[first] = second;
//         console.log('done');

//     } else {
//         console.log('eror');
//         i--;
//     }
// }
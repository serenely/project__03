const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        for (let i = 0; i < 1; i++) {
            personalMovieDB.count = prompt('Сколько фильмов посмотрел?', '');

            if (personalMovieDB.count != null && personalMovieDB.count != '') {
                console.log('gg');
            } else {
                i--;
                console.log('bb');
            }
        }
    },
    rememberMyFilms: () => {

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
    },
    detectPersonalLevel: () => {

        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count < 1000) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибочка вышла');
        }
        switch (personalMovieDB.count) {
            case 42:
                console.log('Юбью Киську');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);

        }
    },
   
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let ask = prompt(`Ваш любимый жанр под номером ${i} `, '');
            console.log(personalMovieDB.genres);
            if (ask != null && ask != '') {
                console.log('Что-то не то');
                personalMovieDB.genres[i - 1] = ask;

            } else {
                prompt(`Ваш любимый жанр под номером ${i} `, '');
                i--;

            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        
    },
};
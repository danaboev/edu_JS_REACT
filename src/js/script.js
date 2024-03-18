/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a = prompt('Сколько фильмов вы уже посмотрели?', ""),
      b = prompt('На сколько оцените его?'),
      c = prompt('Сколько фильмов вы уже посмотрели?', ""),
      d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
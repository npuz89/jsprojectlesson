"use strict"; /* строгий режим */

/* const answer = [];
answer[0] = prompt("Ваше имя?", "");
document.write(answer);

const age = confirm("Вам есть 18?");
document.write(age);

alert("Спасибо что ответили на наши вопросы. Нажмите ОК чтобы продолжить"); */

/* const answer = [];
answer[0] = prompt("Ваше имя?", "");
const age = confirm("Вам есть 18?");

document.write(`Привет ${answer}, Вам 18 и более лет и это ${age}`); */

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
let filmsname = prompt("Один из просмотренных фильмов?");
let filmscif = +prompt("Оценка фильма?", "");


let PersonMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};

PersonMovieDB.movies[filmsname] = filmscif;

console.log(PersonMovieDB);

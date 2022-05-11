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

/* let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
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

console.log(PersonMovieDB); */

/* let num = +prompt("Введите любую цифру", "47"); */
/* if(num == 42){
    console.log("Error");
}else if(num == 43){
    console.log("Error2");
}else {
    console.log(`num = ${num}`);
} */

/* switch(num){
    case 43:
        console.log("Error");
        break;
    case 47:
        console.log("Ok");
        break;
    default:
        console.log("What?");
} */
/* while(num < 55){
    console.log(num);
    num++;
} */
/* for(let i = num; i < 10; i++){
    if(i == 6){
        continue;
    }
    console.log(i);

} */
 let numberOfFilms;

 function start(){
     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
     }
 }

 start();

let PersonMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};

function remembersFilms(){
    for(let i = 0; i < 2; i++){
        let filmsname = prompt("Один из просмотренных фильмов?"),
            filmscif = +prompt("Оценка фильма?", "");
        if(filmsname != '' && filmscif != '' && filmsname != null && filmscif != null && filmsname.length < 50){
            PersonMovieDB.movies[filmsname] = filmscif;
            console.log("done");
        }else {
            i--;
            console.log("error");
        }
            
    }
}

remembersFilms();

function detectedFilms(){
   if(PersonMovieDB.count < 10){
    console.log("Мало");
}else if(PersonMovieDB.count > 10 && PersonMovieDB.count < 30){
    console.log("Пойдёт");
}else if(PersonMovieDB.count > 30){
    console.log("Киноман");
}else{
    console.log("Error");
}  
}
  
detectedFilms();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        PersonMovieDB.genres[i - 1] = prompt(`ваш любимый жанр ${i}`);
    }
    
}
writeYourGenres();

function showMyDB(){
    if(PersonMovieDB.privat == false){
        console.log(PersonMovieDB);
    }
    
}
showMyDB();



/* function text(text){
    console.log(text);
}

text("Hello"); */
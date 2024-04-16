"use strict";
///methods - методы и свойства строк и чисел

const str = 'test';
// const arr = ['1,2,3'];
// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);
///method
console.log(str.toUpperCase());

///поиск по строку

const fruit = 'some fruit';
console.log(fruit.indexOf("fruit"));

//slice() 
// substring() 
// substr() 
// 3-случая 

const logg = "hello world";
console.log(logg.slice(6, 10));
// console.log(logg.slice(6));
console.log(logg.slice(-6, -1)); //с обратной стороной
console.log(logg.substring(6, 8));
console.log(logg.substr(6, 5));

//for numbers

const num = 12.3;
console.log(Math.round(num));

const tes = '12.3px';
console.log(parseInt(tes));
console.log(parseFloat(tes));





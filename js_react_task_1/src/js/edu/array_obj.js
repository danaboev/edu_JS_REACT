//разница между МАССИВАМИ и ОБЪЕКТАМИ
//ARRAY vs OBJECT
//syntax
const array = ['1', '2', '3'];
console.log(array[1]);

array[10] = '12345' //dont recomeded - не рекомендуктся 
console.log(array[10]);
console.log(array);

const object = { a: 1 , b: 2, c: 3};

const workers = {
    'anna' : 500,
    'ben' :600,
    alex:700
}
//functional obj
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};
const b = 'b';
console.log(arrObj.a);
console.log(arrObj[1]);
console.log(arrObj[2]);
// adding  value - задаем нового переменного-объекта и  нового значения к объекту b
// arrObj.b = '123'; //орбращаем к свойству 
// arrObj['b'] = '1234'; надо задавать строку в кавычках 
arrObj[b] = '1234';

console.log(arrObj['b']); /* adding  new string value */
console.log(arrObj.b); /* calling b */

// obj in obj,array - вложенные объекты 
const arrObj2 = {
    a: 'a',
    '1': 'b',
    2: 'c',
    abc:{
        b:[],
        d:{}
    }
    
};
arrObj2[b] = {};
arrObj2[b] = [];
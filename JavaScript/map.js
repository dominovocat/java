'use strict'

const obj = {
  prop:123,
}

const dictionary = new Map();
dictionary.set('собака','dog');
dictionary.set('кот','cat');
dictionary.set('кофе','coffee');
dictionary.set('дом','home');
dictionary.set('ребёнок','kid');
dictionary.set('змея','snake');
dictionary.set('ветер','wind');
dictionary.set('огонь','fire');
dictionary.set('взять','take');
dictionary.set('смотреть','watch');
dictionary.set('этаж','flor');
dictionary.set('небо','sky');

const str = 'Собака огонь смотреть ребёнок этаж взять кот';

const translate = (dictionary,str,separator = ' ')=>{
  return str.toLowerCase()
    .split(separator)
    .map((word)=> dictionary.has(word) ? dictionary.get(word):word)
    .join(separator);
}    
console.log(translate(dictionary,str));


const keysArray = [];
for (const iterator of dictionary.keys() ) {
  keysArray.push(iterator)
}
const valuesArray = [...dictionary.values()];
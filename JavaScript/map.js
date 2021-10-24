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

const translate = (str)=>{
  const lowerCaseStr = str.toLowerCase();
  const wordsArray = lowerCaseStr.split(' ');
  const wordsTranslatedArray = wordsArray.map((word)=>{
    if(dictionary.has(word)){
      return dictionary.get(word);
    }
    return word;
  });
  const translatedStr = wordsTranslatedArray.join(' ');
  return translatedStr;
}
console.log(translate(str))
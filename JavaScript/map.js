'use strict'

const obj = {
  prop:123,
}

const map1 = new Map();
map1.set(1,'one');
map1.set(obj,'object');

console.log(map1.get(obj));


map1.delete(1);

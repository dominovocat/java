/* const array1 = ['1', '2', '3'];
const array2 = ['4', '5', '6'];
const array3 = array1.concat(array2);
console.log(array3); */

/* const array1 = ['1','2','3'];
const reversed = array1.reverse();
console.log(reversed); */

/* const array1 = ['1','2','3'];
const pushed = array1.push ('4','5','6');
console.log(pushed);
console.log(array1); */

/* let arr = ['1','2','3'];
arr.unshift = ['4','5','6'];
console.log(arr);

let arr1  = ['1','2','3'];
arr1.unshift = ['6'];
console.log(arr1); */

/* let Array1 = ['js','css','html'];
console.log(Array1);
let firstElement = Array1.shift();
console.log(Array1); */

/* let Array1 = ['js','css','html'];
let popArray1 = Array1.pop();
console.log(Array1); */

/* let sliceArray = ['1','2','3','4','5','6'];
let sliceArray1 = sliceArray.slice(0,3);
console.log(sliceArray1);
let sliceArray2 = sliceArray.slice(3,5);
console.log(sliceArray2); */

/* let spliceArray = ['1','2','3','4','5'];
let SpliceArray1 = spliceArray.splice (1,2);
console.log(spliceArray); */

/* let spliceArray2 = ['1','2','3','4','5'];
let spliceArrayA = spliceArray2.splice (3,0,'a','b','c');
console.log(spliceArray2); */

/* let spliceArray3 = ['1','2','3','4','5'];
let spliceArrayB = spliceArray3.splice (1,0,'a','b','c');
console.log(spliceArray3);
let spliceArrayC = spliceArrayB.splice (4,0,'c') */
/* [1,a,b, 2, 3, 4,c, 5,e]; */

/* let sortArray = ['3','4','1','2','7'];
sortArray.sort();
console.log(sortArray) */

/* let objArray = [js='test', jq='hello', css='world'];
console.log(Object.keys(objArray)); */

/* let hasElemArray = ['a', 'b', 'c', 'd', 'e',''];

function hasElem(numbers,val) {
 return numbers.some(function(numbersVal){
   return val === numbersVal;
 });
}
console.log(hasElem(hasElemArray,''); */

// const checkBox = [1,2,3,4,5,6,7];

// function check (numbers,val){
//   return numbers.some(function(numbersVal){
//     return val === numbersVal;
//   });
// }
// console.log(check(checkBox,7));

/* const checkBox2 = [1,2,3,4,5,6,7];

function check (Array){
for (let i = 0; i<Array.length; ++i) {
  if (Array[i] === i){
  return true
  }
}
return false;
}
console.log(check(checkBox2)); */

/*  ???????????? ???? ??????????????, ?? ???????????? ???? ????????????????... */
/* function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *  (max - min + 1)) + min;
}
console.log(getRandomInt(15,78)) */

/* function random(min,max,a){
let arr = [],m = [],n = 0;
  if (max - min < a-1) return;
  for (let i=0; i<=(max-min); i++)m[i] = i + min;
  for (let i=0; i<a; i++) {
  n = Math.floor(Math.random()*(m.length)); 
  arr[i]=m.splice(n,1);
  }
  return arr
}
let arr = random(15,78,10);

console.log(arr); */

// let arr = [12, 15, 20, 25, 59, 79]
// function average(arr) {
//   let sum = 0;
//   let count = arr.length;
//   for (i=0; i<count; i++) {
//     sum += arr[i];
//   }
//   return sum/count;
// }
// console.log(average(arr));

/* const numbers = [4, -2, 5, 19, -130, 0, 10];
function numbersMax(numbers) {
  return Math.max.apply(null, numbers);
}
console.log(numbersMax(numbers));
function numbersMin(numbers) {
  return Math.min.apply(null, numbers);
}
console.log(numbersMin(numbers)); */

// class Figure3D {
//   constructor(name) {
//     this.name = name;
//   }
//   getVolume() {}
// }

// class Cylinder extends Figure3D {
//   constructor(r, h) {
//     super("Cylinder");
//     this.r = r;
//     this.h = h;
//   }
//   getVolume() {
//     return Math.PI * Math.pow(this.r, 2) * this.h;
//   }
// }

// class Ball extends Figure3D {
//   constructor(r) {
//     super("Ball");
//     this.r = r;
//   }
//   getVolume() {
//     return (4 / 3) * Math.PI * Math.pow(this.r, 3);
//   }
// }

// class Cube extends Figure3D {
//   constructor(h) {
//     super("Cube");
//     this.h = h;
//   }
//   getVolume() {
//     return Math.pow(this.h, 3);
//   }
// }

// const g = new Cube(12);
// const c = new Cylinder(11, 12);
// const b = new Ball(12);
// function getVolumeFigure(figure) {
//   return figure.getVolume();
// }
"use strict";

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getfullName(){
//     return `${this._name} ${this._surname}`
//   }
//   get name(){
//     return this._name
//   }
//   get surname(){
//     return this._surname
//   }
//   set name(name){
//     if(typeof name === 'string'){
//       return this._name = name;
//     }
//     throw new TypeError('Name must be string');
//   }
//   set surname(surname){
//     if(typeof surname === 'string'){
//       return this._surname = surname;
//     }
//     throw new TypeError('Surname must be string');
//   }
// }

// class Student extends User{
//   constructor(name,surname,yearOfAdmission){
//     super(name,surname,yearOfAdmission)
//     this.yearOfAdmission = yearOfAdmission;
//   }
//   getCourse(){

//   }
// }


// class Group{
//   constructor(name,students){
//     this.name = name;
//     this.students = students;
//   }
//   showStudents(){
//     return `${this.students}`
//   }
// }

// console.log(myStudents.showStudents())
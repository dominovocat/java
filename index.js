//  let userInput = prompt('Enter number')
// console.log(userInput);
// console.log(isNaN(Number(userInput)));
// console.log()

// const firstFunction = function (val1, val2) {
//   if (typeof val1 === typeof val2) {
//     if (val1 > val2) {
//       return val1;
//     } else {
//       return val2;
//     }
//   }
//   return null;
// };
// console.log(firstFunction("100", "12"));

// const functionTwo = function (value) {
//   if (typeof value === 'number') {
//       return value % 2 === 0;
//   }
//   return null;
// }
// console.log(functionTwo(14));

// let sideSquare = prompt('Enter side square', '0');

// const getPerimetrSquare = function (side){
//   if(isNaN(side)){
//     return null;
//   }
//   return 4*side;
// }

// const isNumber = function(value){
//   if(value === '' || value === null || isNaN(Number(value))
//   ){
//     return NaN;
//   }
//   return Number(value);
// }
// console.log(getPerimetrSquare());
// let changeSideSquare = (isNumber(sideSquare));
// console.log(getPerimetrSquare(changeSideSquare));
// alert(getPerimetrSquare());
// alert(isNumber());

// let userAdult = prompt("write your age", "0");

// const Adult = function (userAdult) {
//   return userAdult >= 18;
// };
// console.log(Adult(userAdult));

// const checkMultipliciti = function (val1, val2) {
//   if(val1%val2===0){
//     return true;
//   }
// }
// console.log(checkMultipliciti(9,3));

// let userInput = prompt('write somethink');

// const checkWrite = function (value){
//   return(value>20 && value%7===0);
// }
// console.log(checkWrite(userInput));

// const MMM = function (m1,m2,m3) {
//   return (m1+m2>m3 && m1+m3>m2 && m3+m2>m1);
// }
// console.log(MMM(4,19,6))

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @returns {null | number | Array}
//  */
// const solveSquareEquation = function(a,b,c){
//   const D = b*b-4*a*c;
//   if(D<0){
//     return null;
//   }
//   if(D===0){
//     const X = -b/(2*a);
//     return [X,X];
//   }
//   const X1 = (-b + D**0.5) / (2*a);
//   const X2 = (-b + D**0.5) / (2*a);
//   return [X1,X2];
// }
// console.log(solveSquareEquation(1,12,36));
// console.log(solveSquareEquation(5,3,7));

// while (true) {
//   const password = prompt("writte here");
//   if (password === GOOD_PASSWORD) {
//     break;
//   }
// }

// let count = MAX_COUNT_TRY;
// while(count>0){
//   const password = prompt('Enter password');
//   count--;
//   if(password===GOOD_PASSWORD){
//     alert('Thanks');
//     break;
//   }
//   if(count===0){
//     alert('try is over');
//     break;
//   }
//   alert('count number:'+count);
// }

// let num = 10;
// do{
//   console.log(num);
// }while(num>22);

// for(let i=0; i<MAX_COUNT_TRY; i++){
//   const password = prompt();
//   if(password===GOOD_PASSWORD){
//     break;
//   }
//   if(i+1===MAX_COUNT_TRY){
//     alert('try is over')
//   }
// }

const number = prompt()
const calcFactorial = function (number) {
  if (number < 0) {
    return null;
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  if(number>100){
    return false;
  }
  let result = 1n;
  for (let i = 1; i <= number; i++) {
    result *= BigInt(i);
  }
  return result;
}
console.log(calcFactorial(number));

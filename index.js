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



const checkMultipliciti = function (val1, val2) {
  if(val1%val2===0){
    return true;
  }
}
console.log(checkMultipliciti(9,3));

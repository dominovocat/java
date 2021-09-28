//  let userInput = prompt('Enter number')
// console.log(userInput);
// console.log(isNaN(Number(userInput)));
// console.log()




const firstFunction = function(val1,val2){
  if(typeof val1===typeof val2){
    if(val1>val2){
      return val1;
    }else{
      return val2
    }
  }
  return null;
}
 console.log(firstFunction('100','12'));

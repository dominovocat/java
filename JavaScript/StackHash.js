"use strict";

class Stack {
  constructor(maxSize = 5, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size() {
    return this._size;
  }
  get isEmpty(){
    return this._size === 0;
  }
  push(argument) {
    if (this.size >= this._maxSize) {
      throw new RangeError("Stack overflow!");
    }
    this[`_${this.size}`] = argument;
    this._size++;
    return this.size;
  }
  pick() {
    return this[`_${this.size-1}`];
  }
  pop() {
    if(this.size<=0){
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }
}
// const stack = new Stack(3, 45, 65, 67);
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.pick());
// console.log(stack);
// console.log(stack.push(130));
// console.log(stack);


// const checkSequence = (str)=>{
//   if(str === '()()' || str === '(())'){
//     return true;
//   }else false;
// }
// console.log(checkSequence('(())'));


const options = {
  brackets:{
    '(':')',
    '[':']',
    '{':'}',
  },
  isStrict: false,
}



const checkSequence = (str, options)=>{
  const brackets = options.brackets;
  const closessBrackets = Object.values(brackets);
  const stack = new Stack(str.length);
  for(const symbol of str){
    if(brackets[symbol]){
      stack.push(symbol);
      continue;
    }
    const lastBracketsOfStack = stack.pick();
    const correctBrackets = brackets[lastBracketsOfStack];
    if(symbol === correctBrackets){
      stack.pop();
    }else if(brackets[symbol] || closessBrackets.includes(symbol)){
      return false;
    }
  }
  return stack.isEmpty;
}
console.log(checkSequence('()()()', options));


class Queue{
  constructor(...args){
    this._head = 0;
    this._tail = 0;
    for(const argument of args){
      this.push(argument);
    }
  }
  get size(){
    return this._tail-this._head;
  }
  push(value){
    this[this._tail]=value;
    this._tail++;
    return this.size;
  }
  unShift(){
    if(this.size){
      const deItem = this[this._head];
      delete this[this._head++];
      return deItem;
    }
  }
}


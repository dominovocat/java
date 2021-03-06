function MyArrayProto(){
  this.push = function(){
    for(let i = 0;i < arguments.length; i++){
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop = function(){
    if(this.length===0){
    return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;
  }
  this.forEach = function(func){
    for(let i=0;i<this.length;i++){
      func(this[i],i,this);
    }
  }
  this.some = function(func){
    for(let i=0;i<this.length;i++){
      if(func(this[i],i,this)){
        return true;
      }
    }
    return false;
  }
  this.every = function(func){
    for(let i=0;i<this.length;i++){
      if(func(this[i],i,this) === false){
        return false;
      }
    }
    return true;
  }
  this.filter = function(func){
    const result = new MyArray();
      for(let i=0; i<this.length;i++){
        if(func(this[i],i,this)){
        result.push(this[i]);
      }
    }
    return result;
    
  }
  this.map = function(func){
    const result = new MyArray();
    for(let i=0; i<this.length;i++){
      if(func(this[i],i,this)){
        return result;
      }
    }
  }
  this.shift = function(){
    if(this.length===0){
      return;
      }
      const item = this[--this.length];
      delete this[this.length];
      return item;
  }
  this.unShift = function(){
   
  }
  this.concat = function(){
    const result = new MyArray();
  }
}
function MyArray(){
  this.length = 0;
  for (let i = 0; i < arguments.length; i++){
    this.push(arguments[i]);
  }
}
MyArray.prototype = new MyArrayProto();

function bigTen(n){
  return n>5;
}
const myArray = new MyArray(1,1,1,10,11,190);
// console.log(myArray.filter(bigTen));


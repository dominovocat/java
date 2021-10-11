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
//   const password = prompt('write here');
//   if(password===GOOD_PASSWORD){
//     break;
//   }
//   if(i+1===MAX_COUNT_TRY){
//     alert('try is over')
//   }
// }

// const number = prompt()
// const calcFactorial = function (number) {
//   if (number < 0) {
//     return null;
//   }
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   if(number>100){
//     return false;
//   }
//   let result = 1n;
//   for (let i = 1; i <= number; i++) {
//     result *= BigInt(i);
//   }
//   return result;
// }
// console.log(calcFactorial(number));

// const objectCat = {
//   name: "Cat",
//   isMale: false,
//   color: "grey",
//   breed: "yard",
//   age: 2,
//   waight: 7,
//   isSlipping: true,
//   say: function () {
//     return "meow";
//   },
//   run: function () {},
// };

// console.log(objectCat.say());

// objectCat.countLegs = 4;

// console.log(objectCat);
// console.log(objectCat.color);
// objectCat.age++;
// console.log(objectCat.age);
// delete objectCat.isSlipping;
// console.log(objectCat.isSlipping);

// const dog = {
//   name: "Bulba",
//   isMale: "transgender",
//   color: "pink",
//   breed: "neBinarniy",
//   age: 46,
// };
// console.log(dog);

// const objectCat2 = {
//   name: "Cat",
//   isMale: false,
//   color: "grey",
//   breed: "yard",
//   age: 2,
//   waight: 7,
//   isSlipping: true,
//   say: function () {
//     return "meow";
//   },
//   run: function () {},
// };

// function ObjectCat(name, isMale, color, breed, age) {

// }

// const newCat = new ObjectCat('Cat',false,'grey','yard',2);
// const nCat = new ObjectCat('Muha',false,'black','yard',7);

// console.log(nCat.name+' says'+nCat.say());

// function Personal(name, sname, age,){

// this.name = name;
// this.sname = sname;
// this.age = age;
// this.say = function(){
//   return name+' '+sname;
//   }
// };

// const Max = new Personal('Max','Garfield',24,);
// const Andry = new Personal('Andry','Smith',30);
// const Eddi = new Personal('Eddi','Cruy',28);
// console.log(Eddi.say());

// function Country(name,population,area){
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function(){
//     return (this.population/this.area);
//   }
// };

// const Italy = new Country('Italy', 59000000,301340);
// console.log(Italy.getDensity());

// function Auto(name,maxSpeed){
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;

//   this.accelerate = function(value){
//    if(value<0){
//      return false
//    }
//     this.speed += value;
//     if(this.speed>this.maxSpeed){
//       this.speed = this.maxSpeed;
//     }
//     return this.speed;
//   }
//   this.deaccelerate = function(value){
//     if(value<0){
//       return false;
//     }
//     this.speed -= value;
//     if(this.speed<0)
//     this.speed = 0;
//     return this.speed;
//   }
//   this.stop = function(){
//     return (this.speed = 0);
//   }
// }

// const Ambulance = new Auto('Ambulance',50)
// console.log(Ambulance.accelerate(150));

// function CoffeeMachine(brand,maxVolume){
//   this.brand = brand;
//   this.maxVolume = maxVolume;
//   this.Volume = 0;

//   this.addWater = function(value){
//     if(value>this.maxVolume){
//       return false;
//     }
//     this.Volume+=value;
//     if(this.Volume>this.maxVolume){
//       return (this.Volume=this.maxVolume);
//     }
//     if(value>=this.Volume){
//       return (this.Volume=value);
//     }
//   }

//   this.makeCoffee = function(value){
//     if(value<=0 || this.Volume<value){
//       return false;
//     }
//     this.Volume -=value;
//     return this.Volume;

//   }
// }

// const Coffee = new CoffeeMachine('chepuha', 50);

// console.log(Coffee.addWater(40));
// console.log(Coffee.makeCoffee(30))

// let max = 50;
// let min = 20;
// let number = 3;

// function numbers (max,min,number){
//   for(let i=max; i>=min; i--){
//     if(i%number===0){
//     console.log(i)
//     }
//   }
// }
// numbers(50,20,3);

// const checkMath = function (num1=5,num2=4,operator='*'){
//   switch(operator){
//     case '*':
//       result=num1*num2;
//       break;
//       default:
//       break;
//   }
//   if(result===null || isNaN(result)){
//     return 'error'
//   }
//   while(true){
//     const quetion = prompt(num1+operator+num2);
//     if(Number(quetion)===result){
//       return alert('you are the best chepuha i ever seen')
//     }
//   }
// }
// console.log(checkMath(5,4,'*'))

// const user = {
//   firstName: 'Elon',
//   lastName: 'Musk',
//   age: 50,
//   isMale:true,
// }

// const sayHello = function(obj){
// return `Hello, ${obj.firstName} ${obj.lastName}!`
// }
// console.log(sayHello(user));

// const obj ={};
// obj.prob1 = 12;
// obj['prob2'] = 22;

// const createMultiplicateTable = function(){
//   const table = {};
// for(let i=1; i<10; i++){
//   for(let j=1; j<10; j++){
//     table[`${i} * ${j} = `] = i*j;
//   }
// }
//   return table;
// }
// console.log(createMultiplicateTable())

// const createMultiplicateTable2 = function(min=3,max=5){
//   const table = {};
// for(let i=min; i<=max; i++){
//   for(let j=1; j<10; j++){
//     table[`${i} * ${j} = `] = i*j;
//   }
// }
//   return table;
// }
// console.log(createMultiplicateTable2())

// const fun = function(str,obj){
//   return obj[str];
// }
// const str = '3 * 3 = ';
// const table = createMultiplicateTable();
// console.log(fun(str,table))

// const student1 = {
//   id:1,
//   firstName:'Elon',
//   lastName:'Musk',
//   age:50,
//   isMale:true,
//   toString:function(){
//     return `${student1.firstName} ${student1.lastName}`;
//   }
// };

// const student2 = {
//   id:2,
//   firstName:'Tim',
//   lastName:'Li',
//   age:65,
//   isMale:true,
// };

// const rabbit = {
//   nameRabbit:'Dedula',
//   jump:function(){
//     return 2
//   }
// };

// const rabbitDom = {
//   homeName:'Vnuchok',
//   pet:function(){
//     return `pet me`
//   }
// };

// const magicRabbit = {
//   say:function(){
//     return `What are you looking for?`
//   }
// };

// magicRabbit.__proto__ = rabbitDom;
// rabbitDom.__proto__ = rabbit;

// function LadderPrototype(){
//   this.up = function (){
//     for(let i = 0;i < value; i++){
//       this[this.value++];
//     }
//     return this.value;
//   }
//   this.down = function(){
//     for(let i = 0;i < this.value; i--){
//       this[this.value--];
//     }
//     return this.value;
//   }
//   this.showStep = function(){
//     return this.showStep;
//   }
// }

// function Ladder(){
//   this.value = 0;
// };

// function LadderPrototype(){
//   this.up = function(){
//      this.value++;
//      return this;
//   }
//   this.down = function(){
//     this.value--;
//     return this;
//   }
//   this.showStep = function(){
//     return this.value;
//   }
// };

// Ladder.prototype = new LadderPrototype();

// const ladder1 = new Ladder();

// const step = ladder1.up().up().showStep();

// function saySomething(howSay,whatSay){
//   howSay(whatSay);
// }console.log(saySomething);
// saySomething(console.log,'chepuha');

// // saySomething(alert,'chepuha')

// const nums = [1,2,3,4,5];
// function square(n){
//   console.log(n*n);
//   return n*n;
// }

// for(let i=0;i<nums.length;i++){
//   square(nums[i]);
// }

// nums.forEach(square);

// function User(name, sname, age,isMale,email,isSubscribe = false) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribe = isSubscribe;
// }

// function UserPrototype(){
//   this.fullName = function(){
//     return `${this.name} ${this.sname}`;
//   }
// }

// User.prototype = new UserPrototype();

// // const Max = new User("Max", "Garfield",24,'@gmail');
// // const Andry = new User("Andry", "Smith",30,'@list');
// // const Eddi = new User("Eddi", "Cruy",28,'@mail');

// function createRandomUsers(amount = 3){
//   const db = [];
//   for(let i=0;i<amount;i++){
//     const user = new User(
//       `Name${i}`,
//       `SName${i}`,
//       Math.ceil(Math.random()*60+20),
//       Math.random()>0.5,
//       `email${i}@gmail.com`
//     );
//     db.push(user);
//   }
//   return db;
// }

// const users = createRandomUsers(20);
// users.forEach(function(user){
//   user.isSubscribe = (Math.random()>0.5)
// });
// console.table(users);

// // Name

// const fullNameUsers = users.map(function callback(user){
// return user.fullName();
// });
// console.table(fullNameUsers);

// // Age

// function isOldUsers(user){
//    return user.age>=Old_Age;
// }
// const oldUsers = users.filter(isOldUsers);
// console.table(oldUsers);

// // Сразу 3 тега поиска!!!

// function femaleAge(user){
//   return user.age<=female_Age && user.isMale===false && user.isSubscribe;
// };
// const femaleUser = users.filter(femaleAge);
// console.table(femaleUser);

// const users = createRandomUsers(50);
// console.table(users);

"use strict";

// const site = {
//   title: "Green site",
//   headers: ["Header1", "Header2", "Header3", "Header4"],
//   showHeaders() {
//     this.headers.forEach((header, index) => {
//       console.log(this.title);
//       console.log(index + 1, header);
//     });
//   },
// };
// site.showHeaders();

// // неограниченное количество аргументов

// const sumNumbers = (...args) => {
//   let result = null;
//   // for (let i = 0; i < args.length; i++) {
//   //   result += args[i];
//   // }
//   args.forEach((n) => {
//     result += n;
//   });
//   return result;
// };

// const sum2 = (...args) => args.reduce((result, value) => result + value);

// function recursion(num) {

//   if (num === 0) {
//     return;
//   }
//   console.log(num);
//   recursion(num - 1);
// }
// recursion(4);

const power = (num,exp)=>{
  if(exp===1){
    return num;
  }
  return -num * power(num,exp-1)
}
console.log(power(-3,4));

const factorial = (num) => {
  if (num === 0 && 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(4));

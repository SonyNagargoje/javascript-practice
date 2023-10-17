//Immidiatly Invoked function Expressions(IIFE)

// function chai() {
//     console.log('DB CONNECTED');
// }
// chai()//o/p is DB CONNECTED

(function chai() {// this is nammed iife
    console.log('DB CONNECTED');
})();            //o/p is DB CONNECTED   THIS IS THE IIFE FUNCTION
            //IIFE MEANS global scope poustion created problem some time those global scope polution removes to use iife
  
//  ( function orcode() {
//   console.log('DB CONNECTED TWO'); //o/p is DB CONNECTED TWO
// })()      //if you write two function one by one then you need write  samicolanafter end fist function

//other way of write iife
( (name)=> { //unnamed iife
    console.log('DB CONNECTED TWO ${name}'); 
  })('sony')    //o/p DB CONNECTED TWO ${name}
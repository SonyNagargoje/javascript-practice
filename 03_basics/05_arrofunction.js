const user = {    //object declaration
    username:"sony",
    price:999,

    welcomeMessage: function(){  // function declaration
        console.log(`${this.username}, welcome to website`);// this keyword means current context, this keyword 
      // console.log(this);
    }
}
//user.welcomeMessage()
// user.username = "sam"//o/p is sam , welcome becose
// user.welcomeMessage()

//console.log(this); // o/p{} becose you on node envirement 

//this keyword is use of reffered current contex
//curent context means values 
// const user = {    
//     username:"sony",
//     price:999,} //this is a current context

//browsers under present of global object that is window object
//terminal on node under emty object

//  function chai(){
//     let username ="sony"
 //     console.log(this.username);//o/p is undefine becose of  function under this not work  this is work on object not in function
// console.log(this);//o/p is Object [global] {global: [Circular *1], this is the right way
//  }
// chai()

//how to declare function arro function through

// function chai(){
//     let username ="sony"
//        console.log(this.username);
// }
// chai()//o/p is undefine

const chai=() =>{
  let username ="sony"
     console.log(this);
}
//chai()
//  () => {} this is the syntax of arrow function
 
// const addTwo = (num1, num2) =>{
//   return num1 + num2
// }// this is a simple arrow function

//console.log(addTwo(3, 4));//o/p is 7 

// how to work implici reutern,   implicit return means assume that , its  no need to write rutern keyword it assume that    
//const addTwo = (num1, num2) => num1 + num2
// or
  // const addTwo = (num1, num2) => (num1 + num2)
   // if you write {} then compalsary write return keyword or if you wright paranthesis then not use to reurn keyword
//console.log(addTwo(3, 4))//o/p  is 7

//how to work expicit return

const addTwo = (num1, num2) => ({username: "sony"}) //o/p username sony this is the explicit arrow function
console.log(addTwo(3, 4))
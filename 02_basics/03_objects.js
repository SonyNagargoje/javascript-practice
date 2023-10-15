//object declaration of two type
//literals or constructor
// singleton: you make any constructor that time singleton object is make by default
//if you make litrals that time not make singleton


//Object.create  // this type is object create constructor through 


//object literals  //it create object by litrals through
// in literals includes key and values

//how to use symbole as key in oblect
 const mySym =Symbol("key1") //symbol declaration
const JsUser = {
    name:"sony",
    "full name": "sony bangar",
    age: 27,
    //imp of interview
    [mySym]:"mykey1", // symbole act as key
    location: "Jaypur",
    email: " sony@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]

}//object declaration

//how to acess object
// console.log(JsUser.email);//its not right way
// console.log(JsUser["email"]);//its right way
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//symbole print 

//how to change object
JsUser.email = "sony@chatgpt.com"
//console.log(JsUser);
//Object.freeze(JsUser)
//how to  lock changes (freez) object
JsUser.email = "sony@microsoft.com"
//console.log(JsUser)

//how to declar function in object
JsUser.greeting = function(){
    console.log("Hello Js User");//normal value
}

//how to reference of object
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);//refer object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
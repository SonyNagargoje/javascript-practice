//how to work control flow
// 1st control flow is if condition

if(true){// if condition is true then statement is exicute
}
if(false){ //if condition is false thenstatement is not exicute
}
//some comparision operator use of if condition
// < ,>,<=,>=,==,!=,=(single = is assignment operator and == is comparison operator)
//!==, === (=== is check type also eg. if(2 === "2") {console.log("executed");}) // o/p is blank

const isUserloggedIn = true
const temprature =41

// if( temprature < 50){ 
//     console.log("less than 50");
// }
// console.log("temprature is grater then 50")
// this code o/p is less than 50 and temprature grater then 50 becose first if condition exicute and secon statement is out of if function so it has print compalsary 

// if( temprature === 51){ 
//     console.log("less than 50");
// }else{
//     console.log("temprature is grater then 50")
// }// this code op is temprature is grater than 50 becose here applay if else condition so any one condition is exicuted 

const score= 200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//console.log(`User power: ${power}`);//this code is create error power is note define becose it present out of scope (means out of if condition)

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }//thiscode o/p is User power fly becose it present under scope(means under if condition)
//or
// if(score>100){
//        var power = "fly"
//         console.log(`User power: ${power}`);
//      }
// console.log(`User power: ${power}`)
//this code o/p is User power: fly User power: fly  this conde print both statement under scope and out of scope also becose use of var variable it is confusing variable 

//shot hand notation
const balance = 1000
//if(balance > 500) console.log("test");//o/p test ,//this is implisit scope
//or
//if(balance > 500) console.log("test"),console.log("test2");//o/p test, test2 but it is not right way this is not use profestionaly

//use of nested if else
// if (balance < 500){
//     console.log("less than");
// }else if (balance < 750) {
//     console.log("less than 750");
//     }else if (balance < 900) {
//         console.log("less than 900");
//     }else{
//         console.log("less than 1200");
//     } //this code o/p is less than 1200

//how to use maltipal condition 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromGmail = true

//  if(userLoggedIn && debitCard && 2==2){ // this is and operator
//     console.log("allow to buy course");
//  }// o/p is allow to buy course, // this ststement is all condition is true then condition is true if any one condition is false then this stsement is not exicuted
 
if(loggedInFromGoogle || loggedInFromGmail){ //this is  or operator 
    console.log("user logged in");
}//o/p user logged in // this condition is or condition means any one statement is true then condition is exicute
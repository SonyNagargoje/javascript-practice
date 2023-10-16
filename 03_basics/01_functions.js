function SayMyName(){ //functtion declaaration
console.log("s");
console.log("o");
console.log("n");
console.log("y");

}
//SayMyName() //function call // function reference



//  function addTwoNumbers(number1,number2){
//      console.log(number1 + number2);

// }

//addTwoNumbers(3, 5) //o/p is 8

function addTwoNumbers(number1,number2){
    //  let result = number1 + number2
    //  return result  //o/p:8
     //or another way
        return number1 +number2  //o/p:8
 }
//or you write function in variable aslo
const result = addTwoNumbers(3, 5) ////it store in variable
            //o/p is 8 
  //console.log("Reusult:",result);  //check value in result  ans:value is Reusult: undefined       

// function loginUserMessage(username){
// if(username === undefined){   //if condition
//     console.log("please enter a username");
//     return   //if you write return then after return statement are not print becouse its rule of function
// }

//     return `${username} just logged in`

// }
// //console.log(loginUserMessage("hitesh"));//hitesh just logged in
//     //or

//     console.log(loginUserMessage());//o/p is undefined because you are not pass orgument

//or
function loginUserMessage(username ="sam"){ 
    if(username === undefined){   //if condition
        console.log("please enter a username");
        return   //if you write return then after return statement are not print becouse its rule of function
    }
    
        return `${username} just logged in`
    
    }
    
        console.log(loginUserMessage());//o/p is sam because sam is default value but if you pass any other value then print passed value
    
    
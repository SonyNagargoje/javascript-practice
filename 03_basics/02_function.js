//shopping cart
function addTwoNumbers(number1,number2){
    return number1 +number2
}
const result = addTwoNumbers(3, 5)
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));//O/P is 2

// function calculateCartPrice(...num1){ //(...) this 3 dots is rest operators
//         return num1
//      }
//      console.log(calculateCartPrice(200, 400,500));//o/p is [200,400,500] it creates array  becose use the rest operator
      
//or

function calculateCartPrice(val1, val2, ...num1){ //(...) this 3 dots is rest operators
        return num1
     }
    // console.log(calculateCartPrice(200, 400,500, 2000));//o/p is [500, 2000] becose first 2 value is store value 1 val2 and remaining two are goes to array
      

     //how to pass object in function

     const user = { 
        username: "hitesh",
        price:199
     }

 function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is 
     ${anyobject.price} `);
 }
 //handleObject(user) //o/p is Username is hitesh and price is 
                    199  //this is method os object pass 
  //or another method of object pass

  handleObject({
username: "sam",
price: 199
  })//o/p is Username is sam and price is 199 


  //how to array pass in function


  const myNewArray = [200, 400, 100, 600]
  function returnSecondValue(getArray){
    return getArray[1]
  }
  //console.log(returnSecondValue(myNewArray));// o/p is 400
  // another type of array pass
  console.log(returnSecondValue([200,400,500,1000]));

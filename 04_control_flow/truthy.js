//how to work truthy or falsy  ...imp for interview

// const userEmail = "s@sony.ai"
// if(userEmail){
//     console.log("Got user email");

// }else {
//     console.log("Dont have user email");
// }//o/p Got user email

const userEmail = []
if(userEmail){
    console.log("Got user email");

}else {
    console.log("Dont have user email");
}

//falsy value
// false, 0 ,-0,BigInt 0n, "", null, undefine, NaN (not a number)

//truthy value
// "0", 'false', " ",[], {}, function(){} 


//how to check array
// if (userEmail.length === 0){
//     console.log("Array is empty");
// }//o/p Array is empty

//how to check object is empty
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }//o/p is Object is empty

//Nullish Coalescing Operator (??): null undefined
//it works on null or undefined operators only 

let val1;
// val1 = 5 ?? 10  //o/p is 5
//val1 = null ?? 10 //o/p is 10
val1 = undefined ?? 15 //o/p is 15
val1 = null ?? 10 ?? 15 //o/p is 10 
console.log(val1);

//terniary  operator
//how to work terniary operator
// syntax : condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ?console.log("less than 80") : console.log("more than 80")
//o/p is more than 80



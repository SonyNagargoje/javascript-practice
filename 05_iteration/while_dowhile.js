//how to work while loop and do whole loop
//syntax of while: while(condition){statement, increment/decrement}
/*let index=0
while(index <= 10){
    console.log(`value of index is ${index}`);
   index= index+2
}*/ //o/p is value of index is 0,2,4,6,8,10

//how to work while  on array
/*let myArray = ['flash', "batman", "superman"]

let arr = 0
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr+1
}*/ // p/o is value is flash batman superman

//how to work do while loop 
//syntax of do while loop : do{statement, increment/decrement}while (condition)
// in do while loop first print statement then increment then check condition

let score = 1
do{
    console.log(`scope is ${score}`);
    score++
}while (score < 10);//o/p is scope is 11
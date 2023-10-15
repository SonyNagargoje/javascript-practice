let myDate= new Date()
// console.log(myDate.toString()); //output is:Sun Oct 15 2023 08:57:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //output is Sun Oct 15 2023
// console.log(myDate.toLocaleString()); //10/15/2023, 9:00:49 AM
// console.log(typeof myDate); //object  becouse it create a object


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // o/p is Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)//
//  console.log(myCreatedDate.toLocaleString());//o/p 1/23/2023, 5:03:00 AM
 
// let myCreatedDate = new Date("2023-01-14")//
//  console.log(myCreatedDate.toLocaleString());//o/p 1/14/2023, 12:00:00 AM
 
 let myCreatedDate = new Date("01-14-2023")//
 //console.log(myCreatedDate.toLocaleString())//1/14/2023, 12:00:00 AM


 let myTimeStamp = Date.now()

//  console.log(myTimeStamp);//  o/p is 1697361364302 :it is date
//  console.log(myCreatedDate.getTime());//1673654400000:it convert the milisecond
 //console.log(Math.floor(Date.now()/1000));  // it convert the second ....its imp for interview
let newDate = new Date()
console.log(newDate); //2023-10-15T09:23:25.769Z
console.log(newDate.getMonth() +1); //10 is month  (+1 because index value is 0 so add 1 then define the letes month)
console.log(newDate.getDay()); //day is 0 and


//`${newDate.getDate()} and the time`//string interpolation
  

newDate.toLocaleString('default',{
    weekday:"long",
   
})

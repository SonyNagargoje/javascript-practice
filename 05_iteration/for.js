//for
//syntax of for loop (inisilization; condition; increment/decrement){statement}

for(let index = 0; index < 10; index++){
    const element = index;
    //console.log(element);
}//o/p is 0 1 2 3 4 5 6 7 8 9

//or
for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
      //  console.log("5 is best number");
    }
   // console.log(element);
}//o/p is 1 2 3 4 5is best no 5 6 7 8 9 10
// it is possible for under if

for(let i = 0; i <= 10; i++){
   // console.log(`Outer loop value: ${i}`);
   for(let j = 0; j <= 10; j++){
 //console.log(`inner loop value ${j}and inner loop ${i}`);
    // this condition exicute outer loop 1 time then exicute inner loop 10 time then i++ again inner loop exicute 10 time 
//console.log(i + '*' + j +' = ' +  i*j);
    }// print the 0 to 10 table like 0*0=0,1*1=1
}


//how toworks on array

/*let myArray = ["flash", "batman", "superman"]
    console.log(myArray.length);
 for (let index = 0; index < myArray.length; index++) {
   
     const element = myArray[index];
    console.log(element)
    
 }*/ //o/p is 3 flash batman superman 

 // how to work loop on break or continue keyword

 /*for (let index = 1; index <= 20; index++) {
   if (index == 5) {
     console.log(`detected 5`);
     break
   }
   console.log(`value of i is ${index}`);
    
 }*///this o/p is value of i is 1 to 4 then detected 5
  //becose break keyword is stop the exicution after 5 no, remening code is not exicuted 
 

  //hoe to work continue keyword
 for (let index = 1; index <= 20; index++) {
   if (index == 5) {
     console.log(`detected 5`);
     continue
   }
   console.log(`value of i is ${index}`);
    
 }// in continue if you detected 5 then continue run remaining code also
 //o/p is value of i is 1 to 20 print 

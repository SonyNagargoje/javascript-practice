//scope
// let a =10
// const b =20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);  //o/p is 10 20 30 this is the normal variable declaration


//scope means: {} means scope  it uses in if else  condition  for loop and function 
                        //it is the block scope. scope is twp type block scope and global scope
                        //block scop means present with if else for and function {} and global scope means out of {}
if(true){
    let a =10
    const b =20
    var c = 30
    console.log("INNER:", a); //this o/p is 10 becoe this is the present in block
}//this is the block sope  if you wrte this type of code then o/p are created error becose this is block scope and console.log()value is present in out of block it presentin block 
          //but  var c=30 is print becose it confusable variable
         
   //if you write out of block variable then        
let a=300
console.log(a); //this o/p is 300 becose this the global code 
//console.log(b);
console.log(c); 

//node scope and windose scope is different 
//go to browser and go to inspect go to console then this scope is different and 
//in terminal node scope is different work

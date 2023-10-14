//#primitve
//7 types of primitive datatype:  String, Number,Boolean, Null(empty),
// undefined,Symbol,  BigInt
   //primitive datatype is call by value means 

 //imp qestion javascript is statictypeor dinamic type 

 const score = 100 // number defin
 const scoreValue = 100.3  // in js desimal also allow in number datatype
 
 const isLoggedIn = false //bolean
 const outsideTemp  = null //empty , if you check  data type  it returns object becse assign null value
 let userEmail;  //undefine
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId );
 //const bigNumber = 3456543576654356754n
 
 
 
  //  non primitive datatype (Reference): Array objects,Functions
 
  const heros = ["shaktiman", "naagraj", "doga"];
  let myObj = {
   name: "sony",
   age: 22,
  }//in {} values are the object and its data type is diffrent like as string ,no,boolean etc
 
  const myFunction = function(){   //function declaration
   console.log("Hello world");
  }
 
  console.log(typeof outsideTemp);
 //all non primitive data type returns type is always  function but it tell the object function




 //***********memory related*************

 //memory is two type stack and heap memory
//  stack memory (primitive) means all primitivedata type store in stack
//   heap memory (non primitive) means all non primitive data types are store in heap memory
//   in heap emory give a reference by value

let myYoutubename = "sonybangardotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log( myYoutubename);//output is sonybangardotcom
console.log(anothername); //chaiaurcode two output is defferent beacause this is the primitive data type
                         //in primitive data type gives copy of value 

let userOne={
  email: "user@google.com",
  upi:"user@ybl"

}
let userTwo =  userOne

userTwo.email = "sony@google.com"

console.log(userOne.email); //outeput is sony@goole.com
console.log(userTwo.email); //sony@goole.com  two rwsult is same because this is heap memory
                        //in heap memory gives reference of vlue
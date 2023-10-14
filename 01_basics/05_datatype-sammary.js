//#primitve
//7 types of primitive datatype:  String, Number,Boolean, Null(empty),
// undefined,Symbol,  BigInt
   //primitive datatype is call by value means 

 //imp qestion javascript is statictypeor dinamic type 

 const score = 100 // number defin
 const scoreValue = 100.3  // in js desimal also allow in number datatype
 
 const isLoggedIn = false //bolean
 const  = null //empty , if you check  data type  it returns object becse assign null value
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
  
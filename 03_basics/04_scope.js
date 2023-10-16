//how to work nested scope
  
function one(){
    const username ="sony"
    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);//o/p is created error becose this is present out of block

   two()//o/p is sony 
}
//one() //o/p is sony but two and one is run at a time its not run one by one

//in nested function childe function acess the parent variable but parent function is not acess the child function

//how to work  nested if else

if(true){
    const username="sony"
    if(username === "sony"){
        const website = " youtube"
        //console.log(username + website);//o/p is "sony youtube" becose child is acess parent variable

    }
    //console.log(website); //this o/p is created error website is not define becose it is write out of block or uot of scope
}
//console.log(username);//o/p is created error username is not define becose it is present in oute of scop or block


//++++++++++++++++++++ interasting ++++++++++++++++++++

console.log(addone(5));//o/p is 6
function addone(num){ // this is basic function
    return num +1
}


//addTwo(5) // o/p is created error becose function declare different type and hold variable, it ispresent in before function 
const addTwo = function(num){ //this also function but some time  this call expression it like as variable and in javascript variable is very powerfull and variable under hold is any value like function json value
    return num +2
}

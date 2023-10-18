// how to use foreach loop
const coding = ["js", "ruby", "java","python", "cpp"]


/* coding.forEach (function(val){ // in forech loop not define function name becose this is call back function
//                 // in for each loop function value (parameter)automaticaly store
     console.log(val);

 }) *///o/p js ruby java python cpp // 

//applayiing use of arrow function using for each


/* coding.forEach ( (item) => { // this is arrow function
     console.log(item);
}) */ // op is js ruby java python cpp

/* function printMe(item){
    console.log(item);
 }
 coding.forEach(printMe) */ //this is refference of funcrion
 //op is js ruby java python cpp

/*coding.forEach( (item, index, arr)=>{
    console.log(item, index,arr);
})*/
/* o/pis :js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ] ja is item 0 is index []arr
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]*/
 
// how to use under array object on applaying foreach loop
const myCoding = [ 
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] // this array and in {} is object
//use foreach iteration
myCoding.forEach( (item)=>{ 
    console.log(item.languageName);
})

//o/p is javascript java python



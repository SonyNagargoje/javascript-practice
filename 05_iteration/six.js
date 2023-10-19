

/*const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item)=> {
    //console.log(item);  //if you are not write console.log then op is undefined
   return item //o/p is undefined // in foreach statement not return any value
})
console.log(values);*/
//o/p is ruby java python  cpp undefined
/* these time you use filter operation in filter present call back function
and in call back function all values acessing each and then give one condition
in condition those value is true only those value is return another if value is false then not return that*/

//how to use filter: in filter  use  call back function

 /*const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= myNums.filter( (num)=> num > 4)
console.log(newNums);*/
// o/p: [ 5, 6, 7, 8, 9, 10 ]  this isbasic of filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*const newNums= myNums.filter( (num)=> { 
     return num > 4      // if you open a scope (scope means {} )then use return kryword compalsary
})                       //or if you not open scope then use only condition like as upper example 
console.log(newNums);*/ // o/p is[5, 6, 7, 8, 9, 10 ]

//how to applay foreach
/*const newNums =[]

myNums.forEach( (num) =>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);*/ // o/p [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'fiction', publish: 1981, edition:2004},
    { title: 'Book Two', genre: 'Non-fiction', publish: 1992, edition:2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition:2007},
    { title: 'Book Four', genre: 'Non-fiction', publish: 1989, edition:2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition:2014},
    { title: 'Book Six', genre: 'fiction', publish: 1987, edition:2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition:1996},
    { title: 'Book Eifght', genre: 'Science', publish: 2011, edition:2016},
];
let  userBooks  = books.filter( (bk) => bk.genre === 'History')
 //userBooks  = books.filter( (bk) => {return bk.publish >= 2000})

//  console.log(userBooks);
//o/p 
   /*[{title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007},{
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996}]*/
    userBooks  = books.filter( (bk) => {return bk.publish >= 2000})
    console.log(userBooks);
    
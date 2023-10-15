const myArr = [0, 1, 2, 3, 4, 5]   //array declation
const myHeros = ["shaktiman", "nagraj"] //array declaration

const myArr2= new Array(1,2,3,4)  //it also array declaration
//console.log(myArr[1]); //array acess

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
//myArr.shift()
// console.log(myArr.includes(9));//false because vaue is boolean
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()

// console.log(myArr);//o/p:[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //o/p: 0, 1, 2, 3, 4, 5  this is converted in strig
  
//slice, splice

console.log("A", myArr);

const myn1 =myArr.slice(1,3)

 console.log( myn1);
 console.log("B", myArr);


const myn2 =myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2);
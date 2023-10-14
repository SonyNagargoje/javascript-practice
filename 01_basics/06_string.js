const name ="sony" //string decaration
const repoCount = 50

//console.log(name + repoCount + " value"); // this is old methode of string concatination (addition)

console.log(`hello my name is${name} and my repo count is ${repoCount}`); //this is new string interpolation

const gameName = new String('sony-hc-com') //  this is also string declaration
  

// console.log(gameName[0]);// key value pair acess
// console.log(gameName.__proto__); 

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-3, 2)
console.log(anotherString);

const newStringOne =  "  sony  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url  = "https://hitesh.com/hetesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //serch ithe sundar name if yes then true if not present then false

console.log(gameName.split('-'));








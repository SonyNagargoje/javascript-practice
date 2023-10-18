//for of
// this loop is array specific loop
// ["", "", ""] //array of string or [{},{},{}] array of object
//for of is: for (const iterator of object) for of loop is iterator of object means  not only for object you allocate string, array, any  one use 

/*const arr = [1, 2, 3,4, 5]
for (const num of arr) {
    console.log(num);
}*/ //o/p 12345// this loop is not need of condition

/*const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}*/ //op is each char is h, each char is e each char is l l o ...

// Maps:  map is data type
//map is object

/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr',"France")
console.log(map);*///o/p is Map(3) {'IN' => 'India', 'USA' => 'United States Of America','Fr' => 'France'

/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr',"France")
map.set('IN', "India")
console.log(map)*/ // in map are not copied value print o/p is Map(3) {'IN' => 'India', 'USA' => 'United States Of America','Fr' => 'France'

//how to applay loop on map

/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr',"France")
map.set('IN', "India")
//console.log(map)

for (const [key, value] of map) { //[key, value] this is  array destructure
    console.log(key, ':-',value);
}*///o/p is
 /*IN :- India
USA :- United States Of America
Fr :- France*/


//how to work on object of forofloop

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr',"France")
map.set('IN', "India")
for (const [key, value] of map) { 
   // console.log(key, ':-',value);
}
const myObject = { 
    'game1': 'NFS',
    'game2': 'Spiderman:' 
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} //op is TypeError: myObject is not iterabl
// this for of is not work on object
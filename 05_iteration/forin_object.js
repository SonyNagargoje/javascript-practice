/*const myObject = { 
    js: 'javascri',
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject){ 
    console.log(key);
}*/ //o/p is js cpp rb swift

//how to print object for in loop
const myObject = { 
    js: 'javascri',
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"
}
//for (const key in myObject){  //forin loop
    //console.log(myObject[key]);//o/p isjavascri C++ ruby swift by apple
//} // or 
for (const key in myObject){ 
   // console.log(`${key} shotcut is for ${myObject[key]}`);
}//op is 
/*js shotcut is for javascri
cpp shotcut is for C++
rb shotcut is for ruby
swift shotcut is for swift by apple*/

//for in loop works on array?
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming) {
    //console.log(key); // o/p  0 1 2 3 4 // this array key
// in arrays key is start with 0 and it bydefault present  in number
//but in object any key included 
console.log(programming[key]); //this is object key //o/p : js rb py java cpp
}

//can for in keyworks on map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr',"France")
map.set('IN', "India")

for (const key in object) {
    
        console.log(key);
    
}  // map is not itratable so not applaying  for in loop
 
// in object applaying loop then use forIn loop
// if in array applaying  loop  then use forof loop






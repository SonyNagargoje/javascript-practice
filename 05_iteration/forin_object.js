/*const myObject = { 
    js: 'javascri',
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject){ 
    console.log(key);
}*/ //o/p is js cpp rb swift

//how to print object
const myObject = { 
    js: 'javascri',
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"
}
//for (const key in myObject){ 
    //console.log(myObject[key]);//o/p isjavascri C++ ruby swift by apple
//} // or 
for (const key in myObject){ 
    console.log(`${key} shotcut is for ${myObject[key]}`);
}//op is 
/*js shotcut is for javascri
cpp shotcut is for C++
rb shotcut is for ruby
swift shotcut is for swift by apple*/
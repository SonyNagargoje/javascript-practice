//how to declare object help of constructor
//const tinderUser = new Object() //its a singleton object o/p is {}
//console.log(tinderUser);

const tinderUser = {} //its non singleton object o/p is {}
tinderUser.id = "123abc"
tinderUser.name = "sony"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//how to define object under object

const regularUser = {
    email: "some@gmail.com",
    fullname:{     //object under object
        userfullname:{
            
       firstname: "sony",
        lastname: "bangar"
        }

    }
}
//how to acess object under ibject
//console.log(regularUser.fullname.userfullname.lastname);

//how to combine object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 ={obj1,obj2}//o/p:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({},obj1, obj2, obj4)//o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
       // its combine the three object.  //{} this empty paranthesis is optional but if it is write then confirm marge the object  

const obj3 = {...obj1, ...obj2} // this type is mostly use it use 99% // spraed operator
//console.log(obj3);

//value comes frome database
const users = [
    {
      id:1,
      email:"sony@gmail.com"
    },
    {
        id:1,
      email:"sony@gmail.com"
    },
    {
        id:1,
      email:"sony@gmail.com"
    },

]
users[1].email
//console.log(tinderUser);

console.log(Object.keys(tinderUser)); //o/p:[ 'id', 'name', 'isLoggedIn' ] it find the keys
//console.log(Object.values(tinderUser));//o/p [ '123abc', 'sony', false ] it find vaues
console.log(Object.entries(tinderUser));//o/p:[ 'id', 'name', 'isLoggedIn' ][ [ 'id', '123abc' ], [ 'name', 'sony' ], [ 'isLoggedIn', false ] ]

//if  you search some value in oject then this methode is use
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//o/p: is true //if property is present then result is true another result is false
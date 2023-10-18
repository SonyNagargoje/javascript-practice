//switch :syntax of switch case
// switch(key) {
//     case value: 

//     //break;
//     //default:
//     //break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
        
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//         default:
//             console.log("default case match");
//             break;
//         }// o/p is march

//break is important  becose by defualt those time your case is match then remaining all code is exicute, it is not match other cases and print them but if you write breack then only match case is exicute and code is break.
//remaining all code exicuted except defualt
//break is use to break control flow

// if you match string

const month = "march"
switch (month) {
    case "jan":
        console.log("january");
        break;
        
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

        default:
            console.log("default case match");
            break;
        } // o/p march
//reduce method 
/* const myNums = [1, 2, 3]

 const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
 }, 0)
 console.log(myTotal);*/

 //howto use arrrow function 
 const myNums= [1, 2, 3]
 const myTotal = myNums.reduce( (acc,currval) => acc+currval,0)
 console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "js course",
         price: 12999
    },
    {
        itemName: "py course",
         price: 999
    },
    {
        itemName: "datascience course",
         price: 12999
    },
    {
        itemName: "mob course",
         price: 5999
    },
 ]
  const priceToPay = shoppingCart.reduce((acc,  item) => acc + item.price,0)
  console.log(priceToPay);
import React from "react";
 let a = [1,2,3,4,5,6,7,8,9,10];
 let fruit =["apple","banana","orange","kiwi","cheery","pineapple","pomergrant","grapes"];
 let price =[170,30,200,134,350,270,210,79];
 let b = a.slice(6,8);
 let c=fruit.splice(1,2,"DragonFruit","Dates")
 const arrayshift = [1,2,3,4,5]
 console.log(b);
 console.log(c);
 console.log(arrayshift.shift());
  console.log(arrayshift.pop());
console.log(arrayshift.unshift(9));
console.log(arrayshift)
const Day5 = () =>
{
    return(
 <div>
   {fruit.map((fruits,index)=>(
    <h1 key = {index}>
        {fruits} - {price[index]}
    </h1>
   ))}
   </div>
    )
}
export default Day5;
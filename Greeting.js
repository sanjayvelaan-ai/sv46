import React from "react";
const other=()=>{
    let i=0;
    if(i<=10){
        console.log(i);
    }
}
const Laptop =
{
    MB:"Memory",
    RAM:"8gb",
    Brand:"Samsung",
}
console.log(Laptop)
const Greeting=()=>{
    return(
        <div>
            <h1 onClick={other}>hello</h1>
        </div>
    )
}
export default Greeting;
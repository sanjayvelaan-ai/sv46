import React from "react";
import { useState } from "react";


function State(){
    const [count,setCount]=useState(9);
    function clickable(){
        setCount(count+1);
}
function decreable(){
        setCount(count-1);
}
    return (
        <>
        <h1>{count}
            </h1>
            <button onClick={clickable}>Increase</button>
            <button onClick={decreable}>decrease</button>
        </>
        

    )
}
export default State;
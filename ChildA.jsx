//import React, { useContext } from "react";
import React from "react";
import ChildB from "./ChildB";
import useCounter from "./usecounter";

export default function ChildA(){
const {count,increment,decrement,reset}=useCounter(0);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <h1>"This is Child A"</h1>
        <ChildB/>
        </>
    )
}
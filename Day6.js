import React from "react";
import {useEffect,useState} from "react";


var timer=0;
function start(){
    timer = setTimeout(()=>{console.log("Timer is started")},5000);
}
// useEffect(()=>{
//     return ()=> {

//     };
// },[dependencies]);
// useEffect(()=>{
//     return ()=>{

//     };
// },)
function clear(){
    clearTimeout(timer);
    alert("Time Stopped");
}

const Day6 = ()=>
{

    const[count,setcount=0]= useState(0);
    useEffect(()=>{
        return()=>{

        };
    },[count]);
    function button(){
    setcount(count+1);
     alert("The Number Of Buttons Clicked : "+`${count}`);


}
 function button1(){
    setcount(count+1);
     alert("The Number Of Buttons Clicked : "+`${count}`);


}
 function button2(){
    setcount(count+1);
     alert("The Number Of Buttons Clicked : "+`${count}`);


}
   
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={button}>Use Effect with Dependencies</button><center></center>
            <button onClick={button1}>Use Effect without Dependencies</button><center></center>
            <button onClick={button2}>Use Effect Empty Dependencies</button><center></center>
        </div>
    )
}
export default Day6;
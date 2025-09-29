import React, { useContext } from "react";
import {UserContext} from './App';
export default function ChildB(){
    const user=useContext(UserContext);
    return(
        <>
        <h1>"This is Child B"</h1>
        <p>This data is from {user.col2}</p></>
    )
}
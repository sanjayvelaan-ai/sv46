import React from "react";

import { UserContext } from "./App";
import { useContext } from "react";
export const InitialState={count :[]}
const ReduceRedux= (state ,action)=>
{
    //const user = useContext(UserContext);
    switch(action.type)
    {
        case "Increment":
            return {count:[...state.count,action.products]}
        case "Decrement":
            return {count : state.count.slice(0,-1)};
        case "Reset":
            return { count : [] };
        default :
        return state;        
    }

}

export default ReduceRedux;
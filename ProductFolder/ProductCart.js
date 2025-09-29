import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useReducer } from "react";
import Product from "../Product";
import { Reducer,initialState } from "./Reducer";

export default function ProductCart()
{
    const Products =[
        {id : 1 , name :"DairyMilk",price :10},
        {id : 2 , name :"Silk",price :60},
        {id : 3 , name :"choco bar",price :80}
    
    ]
    //const apikey = process.env.REACT_APP_AB_API;
    //console.log(apikey);
    const mapApi = process.env.REACT_APP_MAP_API;
    console.log(mapApi);
    
    

    const [state ,dispatch]=useReducer(Reducer,initialState)
        useEffect(()=>{
           console.log(state)

    },[state])
    return(
        <>
        {Products.map((pro,index)=>(
            <div key={`${pro.id} - ${pro.price}`}>
                {pro.name} : {pro.price}
                <button onClick={()=>{dispatch({type:"ADD",product:pro})}}>Add To Cart</button>
            </div>
        ))}
        <hr/>
        {state.cart.map((item,index)=>(
            <li key={`${item.id}-${index}`}>
                {item.name} : {item.price};
                <button onClick={()=>{dispatch({type:"Remove",id:item.id})}}>Remove from cart </button>
             </li>
        ))    }

        <button onClick={()=>{dispatch({type:"Clear"})}}> Clear </button>
        </> 
    )

}
import React from "react";
import { useParams } from 'react-router-dom'
const User = ()=>{
    const {id} = useParams();
    return(
        <>        
            {
        id ==16 &&
        <div>
        <img src = "https://imgs.search.brave.com/Gu8ZESk1aH9VGMQvtTU73FpB_CPjBtyxK_keQuugCgU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3ZF/WVZBMndWaVJSTW05/bUFaOWJGaWsucG5n"></img>
        <h1>Iphone 16</h1></div>
}
        {
         id==17 &&
         <div>
        <img src = "https://imgs.search.brave.com/9KehyTKk3gbbTu7CWD1UhWP2UECbZKWC1jfTBvSOQ3k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0FQ/QmdCVlV1U2JwWTdy/dGtUY1NBR2kuanBn"/>
        <h1>Iphone 17</h1></div>
         }
     </>

    )
}
export default User;
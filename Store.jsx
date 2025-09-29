import React from "react";
import { Link, Routes ,Route } from "react-router-dom";
import BuyNow from "./BuyNow";

function Store(){
    return(
        <>
        <nav>
            <Link to ="BuyNow"><li>BuyNow</li></Link>
        </nav>
        <p>This is Store page</p>
        <Routes>
            <Route path="BuyNow" element={<BuyNow/>}>BuyNow</Route>
        </Routes>
        </>
    );
}

export default Store;
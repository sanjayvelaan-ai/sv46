import React, { createContext, useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Product from "./Product";
//import Features from "./Features";
//import Courses from "./Courses";
//import Pricing from "./Pricing";
//import Contact from "./Contact";
//import ProductCart from "./ProductFolder/ProductCart";
//import UserCard from "./ClassTest/ClassTest";
//import Theme from "./ClassTest/
// Theme";
//import ReduceRedux from "./ReduceRedux";
import { Provider } from "react-redux";
import { store } from "./StoreRedux";
import CforRedux from "./ProductFolder/ChildrenForRedux";

  export const UserContext = createContext();


  export default function App() {
  const theme = process.env.REACT_APP_THEME;
    console.log(theme);
    const user = {
      name : "AB",
      age : 18
    };
    //const [user, setUser] = useState()
  return (
    //<ProductCart/>
     <div>
   {/* <UserCard name="Abishek" email="356@skct.edu.in" age='18' /><br/><hr/>*/}
    {/* {/<UserCard name="Sabari" email="337@skct.edu.in" age='18' />/} */}
    
    <Provider store={store}>
    <CforRedux/>
 
 

    </Provider>
    
   
    </div>





/*
 <UserContext.Provider value={user}>
          <ReduceRedux/>    
          
          </UserContext.Provider>

*/


   /* 
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>*/
  );
}
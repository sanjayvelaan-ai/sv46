// import React, { lazy, Suspense, useContext } from "react";
// import { UserContext } from "./App";
// import { useNavigate } from "react-router-dom";
// import './Header.css';
// import Store from "./Store";
// import Ipad from "./Ipad";
// import { Routes, Route, Link } from "react-router-dom";
// import User from "./User";
// import {Suspense,lazy} from "react";
// const Home = lazy(()=>import("./Rt/Home"));
// const About = lazy(()=>import("./Rt/About"));
// const Contact = lazy(()=>import("./Rt/Contact"));
// const Header = () => {
//   const bat = useContext(UserContext);
//   const navigate = useNavigate();

//   return (
//   <>  <div className="Header">
//       <nav className="menuHeader">
//         <ul className="ulHeader">
//           <li>
//             <img
//               src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
//               alt="apple logo"
//               width="60"
//               height="40"
//             />
//           </li>
//           <Link to="/store"><li>{bat.col1}</li></Link>
//           <Link to="/User/102"><li>{bat.col2}</li></Link>
//           <li>iPhone</li>
//           <li>Watch</li>
//           <li>Vision</li>
//           <li>Airpods</li>
//           <li>TV & Home</li>
//           <li>Entertainment</li>
//           <li>Accessories</li>
//           <li>Supports</li>
//         </ul>
//       </nav>
//     </div>
//     <Routes>
//       <Route path="/store/*" element={<Store/>}/>
//       <Route path="/user/:id" element={<User/>}/>
//     </Routes>
//     <button  onClick={()=> navigate("/store")}>Go to the Store</button>
//     </>
//   ); 
// };

// export default Header;
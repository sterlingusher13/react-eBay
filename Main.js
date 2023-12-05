import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
 } from "react-router-dom";
 import Home from "./Home";
 import Products from "./Products";
 import Contact from "./Contact";
 import Info from "./Info";

 class Main extends Component {
     render() {
         return (
             <HashRouter>
            <div>
                <h1>Ebay</h1>
                <ul className="header">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/products">Products</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/info">Info</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" component={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="info" element={<Info/>}/>
                </Routes> 
                </div>
            </div>
            </HashRouter>
         );
     }
 }



 export default Main;
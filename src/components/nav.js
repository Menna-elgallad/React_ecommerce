import React from 'react';

import logo from "./logo.png"
import { Link } from "react-router-dom";

const Nav=()=>{
      return(
          <>
            <div className="containerr">
                
                <div className="logo"><img  src={logo}/> </div>
                <div className="sec">
                <ul>
                
               
              <li> < Link to="/contact">CONTACT</Link> </li> 
              <li> < Link to="/aboutus">ABOUT US</Link> </li> 
              <li> < Link to="/login">LOGIN</Link> </li> 
              <li> < Link to="/signup">SIGN UP</Link> </li> 
              <li> < Link to="/shop">SHOP</Link> </li> 
              <li><Link  exact to="/">HOME</Link> </li> 
              
             
                </ul>
                </div>
               
                <hr className="first" />
            </div> 
            
            </>
       )}

export default Nav
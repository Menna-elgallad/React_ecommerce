import React , {Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/nav";
import Body from "./components/body";
import Help from "./components/help";
import Footer from "./components/footer";
import About from "./components/AboutUs";
import Contact from "./components/contact";
import Shop from "./components/shop";
import Register from "./components/register";
import Login from "./components/login";


export default class App extends Component { 

  render(){
    return (
      <>
      <BrowserRouter>
         <Nav/>
        <Route exact path="/" component={Body}/>
        <Route  path="/aboutus" component={About}/>
        {/* <Route  path="/login" component={login}/> */}
        <Route  path="/shop" component={Shop}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/signup" component={Register}/>
      </BrowserRouter>
      
    
   
     
     </>
   
    )
   }

  }
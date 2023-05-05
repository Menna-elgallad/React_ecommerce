import React, { Component } from 'react';
import p1 from './homeimg/p1.jpg'
import data ,{data2} from './data';
import Image from './imagecard';
import Footer from './footer';
import About from "./AboutUs";
import Contact from "./contact";
import { BrowserRouter, Route } from "react-router-dom";
class Body extends Component{

    render(){

        return(
               <>
                  <div>
                    <img   src={p1} className="p1" />
                   {/* <input type="button" value="Shop now" className="btn btn-primary" id="b1"/>  */}
                 
                  </div>
                  <h4 className=" text-center mt-3 texx">High quality </h4>
                  <h1 className=" text-center mt-3 tex"> Best Sellers</h1>
                  
                     <section className="py-4 containerr">
                  <div className="row justify-content-center ">
                  {data.imagedata.map((item)=>{
                             return(
                            
                                 <Image image={item.image} title={item.title} price={item.price}/>
                             )
                         })}
                        
                        
                  </div>
                  </section>  
                  <h4 className=" text-center mt-3 texx">Shopping with us </h4>
                  <h1 className=" text-center mt-3 tex">20% Sale </h1>
                 
                  <section className="py-4 containerr">
                  <div className="row justify-content-center ">
                  {data2.imagedata2.map((item)=>{
                             return(
                            
                                 <Image image={item.image} title={item.title} price={item.price}/>
                             )
                         })}

                  </div>
                  </section>    
                  <BrowserRouter>
                  <Footer/>
        
                <Route  path="/aboutus" component={About}/>

                <Route  path="/contact" component={Contact}/>
   
                </BrowserRouter>
                  
             </>   
            )
           
    }
   
}

export default Body
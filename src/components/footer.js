import React from "react"
// import Contact from "./components/contact";
// import About from "./components/AboutUs"; 
const Footer = () => <footer  className="page-footer font-small blue pt-4 footer">
   
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-3 ">
                <h5 className="text-uppercase">Shiny</h5>
               
                <p>Friendship; peaceful harmony, mutual understanding </p>
                <p> and a peaceful relationship. Established in 2020</p>
                <p><img className="call"  src="https://img.icons8.com/ios-filled/20/000000/phone-disconnected.png"/> +20 01065952262</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-1 mb-3">
                <h5 className="text-uppercase">Categories</h5>
                <ul className="list-unstyled">
                <li>Earings</li> <br/>
                <li>Necklaces</li> <br/>
                    <li>Rings</li>
                   
                </ul>
            </div>

            <div className="col-md-2 mb-md-2 mb-3 ">
                <h5 className="text-uppercase">Customer Services</h5>
                <ul className="list-unstyled text-center ">
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/aboutus">About us</a></li>
                
                </ul>
            </div>
        </div>
    </div>

    <hr />
   
    <div className="footer-copyright text-center py-3">
      <p>© 2021 shiny Accessories. All rights reserved.</p>
    </div>
   
</footer>

export default Footer

// import './About.css';
import {Carousel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/9.jpg'
import img2 from './images/11.jpg'
import img3 from './images/13.png'
import gold from './images/she.png'
import silver from './images/shee.png'
import Footer from './footer';
function About() {
   return (
     <>
    

    <div className="slide" >
      <Carousel fade interval={null}>
  <Carousel.Item size="200" >
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      width='800'
      height='250'
      
    />
    <Carousel.Caption>
      <h3>SHINY</h3>
      <p>your perfect way to add something special.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      width='800'
      height='250'
    />

    <Carousel.Caption>
      <h3>SHINY</h3>
      <p>your perfect way to add something special.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      width='800'
      height='250'
    />

    <Carousel.Caption>
      <h3>SHINY</h3>
      <p>your perfect way to add something special.</p>
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
<hr color='#c49514'/>

</div>
<div className="p">
  <br></br>
  <h2 align='center'><font face='Calibri Light' size="10px"><b>THE STORY OF SHINY</b></font></h2>
  <p><font face='Calibri Light'>
  Shiny is a family possessed and worked organization that was established in 2000 in Cairo, Egypt.
Since 2000 we’ve offered affordable accessories that can be stacked and styled, with everything from bracelets and hair accessories to necklace and earrings .Our accessories are an effortless style solution to refresh your look - they’re the accessories that make the outfit.
</font>
<br></br>
<br></br>

  </p>
  <h3><font face='Calibri Light'><b><u>Our Materials</u></b></font></h3>
  <table>
    <tr>
      <td><font face='Calibri Light'>we use <b>Solid gold</b> which is a precious metal that will not oxidize or discolor. The 14k alloy gives our pieces their beautiful, subtle hue. Our 14k white gold pieces are finished in rhodium plating, which gives them extra shine and durability.</font></td>
      <td><img src={gold}
      width="350"
      height="250"
      class ="rounded-corners"
      /></td>
    </tr>
    <tr>
      <td><img src={silver}
      width="350"
      height="250"
      class ="rounded-corners"
      /></td>
      <td><font face='Calibri Light'>we also use <b>Sterling Silver</b> which is made of 92.5% pure silver and 7.5% copper. We plate our silver jewelry in rhodium, which gives it extra shine and durability. Rhodium is one of the costliest precious metals due to its rarity.</font>
      </td>
    </tr>
  </table>
  <br></br>
  <h3><font face='Calibri Light'><b><u>Vision</u></b></font></h3>
  <p><font face='Calibri Light'>
  our goal is to design and deliver authentic, outdoor, high-value products for active consumers of all ages and to build our brand worldwide and to include more stores.
</font>

  </p>

 
     <br/>
     
     <div className="bottom">
       <Footer/>
     </div> 
  </div> 
    
 
  

      </>
    );
  }

export default About;

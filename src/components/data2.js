import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img4.jpg'
import img4 from './images/img5.jpg'
import img5 from './images/img6.jpg'

import img7 from "./homeimg/g1.jpg"
import img8 from "./homeimg/g2.jpg"
import img9 from "./homeimg/g3.jpg"
import img10 from "./homeimg/g4.jpg"
const data = {
  products: [
    {
      id: '1',
      name: 'Golden Rring',
      price: 70,
      image: <img height='200' className="shopimg zoom" width='400' src={img1} ></img>,
    },
    {
      id: '2',
      name: 'Golden Necklace',
      price: 100,
      image: <img height='200' width='400' className="shopimg zoom" src={img7} ></img>,
    },
    {
      id: '3',
      name: 'Fantasty Necklace',
      price:100 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img9}></img>,
    },
    {
      id: '4',
      name: 'Gold Necklace',
      price:100 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img3}></img>,
    },
    {
      id: '5',
      name: 'Moon and Star Ring',
      price:50 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img4} ></img>,
    },
    {
      id: '6',
      name: 'Moon Necklace',
      price:100 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img5} ></img>,
    },
    {
      id: '7',
      name: 'Princess Earings',
      price:75 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img8} ></img>,
    },
    {
      id: '8',
      name: 'Stone Necklace',
      price:100 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img2} ></img>
    },
    {
      id: '9',
      name: 'Crescent Necklace',
      price:100 ,
      image: <img height='200' width='400' className="shopimg zoom" src={img10} ></img>,
    }
    
  ],
};
export default data;
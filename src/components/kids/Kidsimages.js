import React from "react";
import "./Kids.css";
import { Navigate, NavLink } from "react-router";
import kidsimage1 from '../../Assets/images/kidsimage1.avif';
import kidsimage2 from '../../Assets/images/kidsimage2.avif';
import kidsimage3 from '../../Assets/images/kidsimage3.avif';
import kidsimage4 from '../../Assets/images/kidsimage4.avif';
import kidsimage5 from '../../Assets/images/kidsimage5.avif';
import kidsimage6 from '../../Assets/images/kidsimage6.avif';
import kidsimage7 from '../../Assets/images/kidsimage7.avif';
import kidsimage8 from '../../Assets/images/kidsimage8.webp';
import kidsimage9 from '../../Assets/images/kidsimage9.jpg';
import kidsimage10 from '../../Assets/images/kidsimage10.webp';
import kidsimage11 from '../../Assets/images/kidsimage11.jpg';
import kidsimage12 from '../../Assets/images/kidsimage12.jpg';

import kidsshoe1 from  '../../Assets/images/kids shoe1.webp';
import kidsshoe2 from '../../Assets/images/kidsshoe2.jpg';
import kidsshoe3 from '../../Assets/images/kidsshoe3.jpeg';
import kidswatch1 from '../../Assets/images/kidswatch1.jpeg';
import kidswatch2 from '../../Assets/images/kidswatch2.jpeg';
import kidswatch3 from '../../Assets/images/kidswatch3.jpeg';

export default function Kidsimages() {
  const kidsImages = [
    {
      id: 1,
      name: "3-piece-cotton-set",
      color: "black",
      price: "₹2,299.00",
      image: kidsimage1,
    },
    {
      id: 2,
      name: "cotton rugby shirt",
      color: "white",
      price: "₹1,299.00",
      image: kidsimage2,
    },
    {
      id: 3,
      name: "cotton rugby shirt",
      color: "red",
      price: "₹3,299.00",
      image: kidsimage3,
    },
    {
      id: 4,
      name: "Long-sleeved football shirt",
      color: "black",
      price: "₹1,299.00",
      image: kidsimage4,
    },
    {
      id: 5,
      name: "Loose-fit hockey shirt",
      color: "Brooklyn Heights",
      price: "₹1000.00",
      image: kidsimage5,
    },
    {
      id:6,
      name:"Loose Fit Jeans",
      color:"Denim blue",
      price:"₹3500.00",
      image:kidsimage6,
    },
    {
      id:7,
      name:"Loose Fit denim shorts",
      color:"cream/striped",
      price:"₹3500.00",
      image:kidsimage7,
    },
    {
      id:8,
      name:"CRAZYON Girls Elastic TOP & Skirt Dress ",
      color:"pink",
      price:"₹999.00",
      image:kidsimage8,
    },
    {
      id:9,
      name:"cat printied multi color dress",
      color:"multi color",
      price:"₹1,999.00",
      image:kidsimage9,
    },
    {
      id:10,
      name:"kids indian army jungle ",
      color:"Beige",
      price:"₹2,999.00",
      image:kidsimage10,
    },
    {
      id:11,
      name:"custo, indian army dress",
      color:"Beige",
      price:"₹2,999.00",
      image:kidsimage11,
    },
    {
      id:12,
      name:"kids indian Sarpanch farmer",
      color:"white",
      price:"₹999.00",
      image:kidsimage12,
    },
  ];

  const kidsShoes = [
  { id: 101, name: "Niski kids LED sports", color: "red and black", price: "₹890.00", image: kidsshoe1},
  {id:2, name:"causal shoee",color:"light grey", price:"2500.00",image:kidsshoe2,},
  {id:3, name:"marvel captian causal", color:"red and blue",cost : "860.00", image:kidsshoe3,},
  {id:4, name:"Analog watch", color:"white", price:"600.00", image:kidswatch1,},
  {id:5,name:"clothing watches",color:"black", price:"650.00",image:kidswatch2,},
  {id:5,name:"spider man watch", color:"red", price:"750.00", image:kidswatch3,},
  ];

  const handleBuyNow = (product) => {
    alert(`You clicked Buy Now for: ${product.name} - ${product.price}`);

  };

  const Cart =(item)=>
    {
      alert('your items are added to cart');
    } 

  return (
    <div className="kids-container">
      <h2 className="kids-heading">Kids Clothing</h2>
      <div className="kids-grid">
        {kidsImages.map((item) => (
          <div className="kids-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>color : {item.color}</p>
            <p>cost : {item.price}</p>
            <button className="buy-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
            <button className="buy-btn" onClick={()=>Cart(item)}>add to cart</button>
          </div>
        ))}
      </div>
      <h2 className="kids-heading">Kids Shoes  && watches</h2>
    <div className="kids-grid">
      {kidsShoes.map((item) => (
        <div className="kids-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>color : {item.color}</p>
          <p>cost : {item.price}</p>
          <button className="buy-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
          <button className="buy-btn" onClick={()=>Cart(item)}>add to cart</button>
        </div>
      ))}
    </div>
    </div>
    
    
  );
}

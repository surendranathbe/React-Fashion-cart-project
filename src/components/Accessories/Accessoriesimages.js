import React from "react";
import './Accessories.css';

import watch1 from '../../Assets/images/Accessioriesimages/watch1.jpeg';
import watch2 from '../../Assets/images/Accessioriesimages/watch2.webp';
import watch3 from '../../Assets/images/Accessioriesimages/watch3.webp';
import wathc4 from '../../Assets/images/Accessioriesimages/watch4.webp';
import watch5 from '../../Assets/images/Accessioriesimages/watch5.webp';
import watch6 from '../../Assets/images/Accessioriesimages/watch6.webp';


import shoe1 from '../../Assets/images/Accessioriesimages/shoe1.jpg';
import shoe2 from '../../Assets/images/Accessioriesimages/shoe2.webp';
import shoe3 from '../../Assets/images/Accessioriesimages/shoe3.avif';
import shoe4 from '../../Assets/images/Accessioriesimages/shoe4.jpg';
import shoe5 from '../../Assets/images/Accessioriesimages/shoe5.webp';
import shoe6 from '../../Assets/images/Accessioriesimages/shoe6.jpeg';

export default function Accessoriesimages() {

    const Accessories = [
        { id: 1, name: "Fasttract Cereme", price: "2500.00", color: "white", image: watch1 },
        { id: 2, name: "Fasttrack Stunners", price: "2500.00", color: "sliver", image: watch2 },
        { id: 3, name: "Fasttrack Nn3072slo1", price: "5795.00", color: "black", image: watch3 },
        { id: 4, name: "Titan Skeletal Automatic", price: "15000.00", color: "blue", image: wathc4 },
        { id: 5, name: "LimeStone LS2978 ", price: "500.00", color: "white", image: watch5 },
        { id: 6, name: "Sylvi Iconic Alalog", price: "1500.00", color: "white", image: watch6 },

    ];
   
     const shoes=[
        {id:1,name:"fashion Blog",price:"1500.00",color:"gray",image:shoe1},
        {id:2,name:"D shoes trendy",price:"3500.00",color:"black &white",image:shoe2},
        {id:3,name:"White trendy causal",price:"850.00",color:"white",image:shoe3},
        {id:4,name:"Korean High top Boots",color:"Orange",price:"5000.00",image:shoe4},
        {id:5,name:"Level Grey Sneakers",color:"white",price:"3500.00",image:shoe5},
        {id:6,name:"Style factor Leather",color:" Brown, Light Brown",price:"3500.00",image:shoe6},
     ]
    const handleBuyNow = (product) => {
        alert(`You clicked Buy Now for: ${product.name} - ${product.price}`);

    };

    const Cart = (item) => {
        alert('your items are added to cart');
    }

    return (
        <div className="Access-container">
            <h2 className="Access-heading">Watches</h2>
            <div className="Access-grid">
                {Accessories.map((item) => (
                    <div className="Access-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>color : {item.color}</p>
                        <p>cost : {item.price}</p>
                        <button className="buy-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
                        <button className="buy-btn" onClick={() => Cart(item)}>add to cart</button>
                    </div>
                ))}
            </div>
            <h2 className="shoe-heading"> Shoes </h2>
            <div className="shoee-grid">
                {shoes.map((item) => (
                    <div className="kids-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>color : {item.color}</p>
                        <p>cost : {item.price}</p>
                        <button className="buy-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
                        <button className="buy-btn" onClick={() => Cart(item)}>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
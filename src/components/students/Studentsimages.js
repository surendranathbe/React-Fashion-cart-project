import React from "react";
import "./Students.css";
import studentimage1 from '../../Assets/images/studentimages/studentimage1.avif'
import studentimage2 from '../../Assets/images/studentimages/studentimage2.webp'
import studentimage3 from '../../Assets/images/studentimages/studentimage3.webp'
import studentimage4 from '../../Assets/images/studentimages/studentimage4.webp'
import studentimage5 from '../../Assets/images/studentimages/studentimage5.avif'
import studentimage6 from '../../Assets/images/studentimages/studentimage6.jpg'
import studentimage7 from '../../Assets/images/studentimages/studentimage7.jpg'
import formalimage1 from '../../Assets/images/studentimages/formalimage1.jpeg'
import formalimage2 from '../../Assets/images/studentimages/formalimage2.webp'
import formalimage3 from '../../Assets/images/studentimages/formalimage3.webp'
import formalimage4 from '../../Assets/images/studentimages/formalimage4.webp'
import formalimage5 from '../../Assets/images/studentimages/formalimage5.webp'

import watch1 from '../../Assets/images/studentimages/watch1.jpg'
import watch2 from '../../Assets/images/studentimages/watch2.webp'
import wacth3 from '../../Assets/images/studentimages/watch3.webp'
import shoe1 from '../../Assets/images/studentimages/Shoe1.webp'
import shoe2 from '../../Assets/images/studentimages/shoe2.jpeg'
import shoe3 from '../../Assets/images/studentimages/shoe3.jpeg'
export default function Studentsimages() {
    const studentimages = [

        { id: 1, name: "Hawaiian style wear", color: "multicolor", price: "3000.00", image: studentimage1, },
        { id: 2, name: "Blue printed blended shirt", color: "blue with white", price: "3000.00", image: studentimage2, },
        { id: 3, name: "style kutta wear", color: "black", price: "2500.00", image: studentimage3, },
        { id: 4, name: "| Long sleeves Party ready shirt", color: "white", price: "4500.00", image: studentimage4, },
        { id: 5, name: "Stylish Tiger Face Digital Printed Shirt", color: "brown", price: "3500.00", image: studentimage5, },
        { id: 6, name: "path fashion regular printed shirt", color: "multi color", price: "999.00", image: studentimage6, },
        {id:7,name:"causal t-shirt", color:"white and brown", price:"950.00",image:studentimage7,},
        {id:8,name :"cellor formal dress",color:"gray",price:"2500.00",image:formalimage1,},
        {id:9,name:"ramaj formal dress",color:"white",price:"2500.00",image:formalimage2,},
        {id:10,name:"kachin brand formal dress",color:"light blue",price:"3500.00",image:formalimage3,},
        {id:11,name:"Rayond ",color:"yellow & black",price:"1500.00",image:formalimage4,},
        {id:12,name:"diamond brand formal ",color:"Maroon Shirt + Olive Green Pants",price:"4500.00",image:formalimage5,},
    ];

    const watches=[
        {id:1,name:"poedagar watch",color:"white",price:"2800.00",image:watch1,},
        {id:2,name:"Titan Skeletal",color:"blue",price:"15,915",image:watch2,},
        {id:3,name:"Olevs men's",color:"white",price:"4106",image:wacth3,},
        {id:4,name:"Calcetto",color:"white",price:"3999.00",image:shoe1,},
        {id:5,name:"Casual sneaker",color:"white",price:"2365.00",image:shoe2,},
        {id:6,name:"new fashion breathe",color:"black",price:"5000.00",image:shoe3,},
    ];

    const BuyNow = (product) => {
        alert(`You clicked Buy Now for: ${product.name} - ${product.price}`);
    }

    const Cart = (product) =>
    {
        alert('items are added to cart page');
    }
    return (
        <div className="student-container">
            <h3 className="student-heading">student shopping</h3>
            <div className="student-grid">
                {studentimages.map((item) => (
                    <div className="student-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>name : {item.name}</p>
                        <p>color : {item.color}</p>
                        <p>price : {item.price}</p>
                        <button className="buy-btn" onClick={() => BuyNow(item)}>Buy Now</button>
                        <button className="buy-btn" onClick={()=>Cart(item)}>add to cart</button>
                    </div>
                ))}
            </div>
            <h3 className="student1-heading">watches and shoees</h3>
            <div className="student1-grid">
                {watches.map((item) => (
                    <div className="student1-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>name : {item.name}</p>
                        <p>color : {item.color}</p>
                        <p>price : {item.price}</p>
                        <button className="buy-btn" onClick={() => BuyNow(item)}>Buy Now</button>
                        <button className="buy-btn" onClick={()=>Cart(item)}>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
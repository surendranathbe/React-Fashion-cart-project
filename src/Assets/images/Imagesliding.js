import React from "react";
import '../../components/kids/Kids.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slidepic1 from '../../Assets/images/slidepic1.jpeg'
import slidepic2 from '../../Assets/images/slidepic2.jpeg'
import slidepic3 from '../../Assets/images/slidepic3.jpg'
import slidepic4 from '../../Assets/images/slidepic4.jpeg'
import slidepic5 from '../../Assets/images/slidepic5.jpeg'
import slidepic6 from '../../Assets/images/slidepic6.jpeg'
export default function Imagesliding()
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return(
      <div className="kids-slider-container">
            <Slider {...settings}>
                <div>
                    <img src={slidepic1} alt="Kids 1" className="kids-slide-image" />
                </div>
                <div>
                    <img src={slidepic2} alt="Kids 2" className="kids-slide-image" />
                </div>
                <div>
                    <img src={slidepic3} alt="Kids 3" className="kids-slide-image" />
                </div>
                <div>
                    <img src={slidepic4} alt="Kids 3" className="kids-slide-image" />
                </div>
                <div>
                    <img src={slidepic5} alt="Kids 3" className="kids-slide-image" />
                </div>
                <div>
                    <img src={slidepic6} alt="Kids 3" className="kids-slide-image" />
                </div>
            </Slider>
        </div>
    );
}
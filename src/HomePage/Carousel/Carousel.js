import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './carousel.css';
import s1 from '../../images/carousel-1.png';
import s2 from '../../images/carousel-2.png';
import s3 from '../../images/carousel-3.png';
import s4 from '../../images/carousel-4.png';
import s5 from '../../images/carousel-5.png';

const Carousel = () => {
    const images = [
        { img: s1, alt: 'slider' },
        { img: s2, alt: 'slider' },
        { img: s3, alt: 'slider' },
        { img: s4, alt: 'slider' },
        { img: s5, alt: 'slider' },
    ]
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false
              }
            }
          ],
        
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    images.map((img, ind) =>
                        <div key={ind} className="caroBox">
                            <img src={img.img} alt={img.alt} className='croImg' />
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Carousel;
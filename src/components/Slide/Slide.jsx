import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slide() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/backend.png" alt="" />
      </div>
      <div>
        <img src="/images/backend.png" alt="" />
      </div>
      <div>
        <img src="/images/backend.png" alt="" />
      </div>
      <div>
        <img src="/images/backend.png" alt="" />
      </div>
    </Slider>
  );
}

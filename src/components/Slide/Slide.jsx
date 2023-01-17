import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slide.module.css';

export default function Slide({ slider }) {
  function SampleNextArrow(props) {
    let { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: 'slick-dots slick-thumb',
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slideWrap}>
        {slider.map((slide, index) => {
          return (
            <div key={index}>
              <img src={slide} alt="" className={styles.slideImg} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

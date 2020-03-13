
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
// Version >= 2.4.0
import React, { useState , Image } from 'react';
import  './Gallery.css';
import 'swiper/css/swiper.css';

  const Autoplay = () => {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return (
      <div className = "logo-container2">
        <div className="main-text">You Can Visit</div>
      <Swiper {...params}>
       < div className="logo-container">
         <div className="logo">
            <img src={'https://www.robinwieruch.de/static/dbb6b6b256b589aad81a3ed374590f4d/2b1a3/banner.jpg'} alt="cur" class="center" />  
            <div className="gallery-text">Metexi</div>
         </div>

        </div>
        < div className="logo-container">
        <div className="logo">
        <img src={'https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg'} alt="cur" class="center"
        />
        </div> </div>
        < div className="logo-container">
        <div className="logo">
        <img src={'https://i.udemycdn.com/course/240x135/1411694_0862.jpg'} alt="cur" class="center"
        />
        </div> </div>
      </Swiper> </div> 
    )
  };
  export default Autoplay;
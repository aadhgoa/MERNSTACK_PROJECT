import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Add this line to import slick-theme.css
import testimonypic1 from '../../images/testimonialmypic.jpg';
import testimonypic2 from '../../images/Testimonypic2.jpg';
import testimonypic3 from '../../images/Testimonypic3.jpg';
import '../Testimonial/Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div   className='testimonial'>
        <p>
          This Guest House is awsome .
          if visiting Goa i would suggest
          you to choose this guest house.
          The staff is amazing specially
          guy called Leander.
        </p>
        <div className='testimonial_img'>
          <img src={testimonypic1} alt='' className='w-25 h-25 rounded-2'/>
          <div>
            <h6 className='Testimon_name' >Basu D Costa</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div   className='testimonial'>
        <p>This Guest House is awsome .
          if visiting Goa i would suggest 
          you to choose this guest house.
          The staff is amazing specially 
          guy called Leander.
        </p>
        <div className='testimonial_img'>
          <img src={testimonypic2} alt='' className='w-25 h-25 rounded-2'/>
          <div>
            <h6 className='Testimon_name' >leander paera</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div   className='testimonial'>
        <p>This Guest House is awsome .
          if visiting Goa i would suggest 
          you to choose this guest house.
          The staff is amazing specially  
          guy called Leander.
        </p>
        <div className='testimonial_img'>
          <img src={testimonypic3} alt='' className='w-25 h-25 rounded-2'/>
          <div>
            <h6 className='Testimon_name' >Basu D Costa</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div   className='testimonial'>
        <p>This Guest House is awsome .
          if visiting Goa i would suggest 
          you to choose this guest house.
          The staff is amazing specially 
          guy called Leander.
        </p>
        <div className='testimonial_img'>
          <img src={testimonypic2} alt='' className='w-25 h-25 rounded-2'/>
          <div>
            <h6 className='Testimon_name' >leander paera</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
    
  )
}

export default Testimonial

// start from immport tesimonial of a person ny adding imagee
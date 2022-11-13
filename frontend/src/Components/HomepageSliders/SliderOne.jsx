import React, { Component } from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default class SliderOne extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <BiRightArrowAlt color="black" borderRadius="full" />,
      prevArrow: <BiLeftArrowAlt color="black"/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667386493900-1d5e09.jpeg" alt="1"  style={{paddingRight:"4%", borderRadius:"10px"}}/>
          </div>
          <div>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/partner-app-supply/1667472964177-812867.jpeg" alt="1" style={{paddingRight:"4%"}}/>
          </div>
          <div>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg" alt="1" style={{paddingRight:"4%", borderRadius:"15px"}}/>
          </div>
          <div>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg" alt="1" style={{paddingRight:"4%", borderRadius:"15px"}}/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667544806430-20fdbb.jpeg" style={{paddingRight:"4%"}}/>
          </div>
          <div>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg" alt="1" style={{paddingRight:"4%"}}/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667304914631-06d0af.jpeg" style={{paddingRight:"4%"}} />
          </div>    
        </Slider>
      </div>
    );
  }
}
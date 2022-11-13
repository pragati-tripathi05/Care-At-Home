import React, { Component } from "react";
import "./SliderTwo.css";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default class SliderTwo extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <BiRightArrowAlt color="black" borderRadius="full" />,
      prevArrow: <BiLeftArrowAlt color="black" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Salon, Spa and Massage Services</h1>
          <p>Hygienic & Single-use products | Low-contact services</p>
        </div>
        <br />
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg"
              alt="1"
              className="content_imag"
            />
            <div className="content_category">
              <p>Salon for Men</p>
            </div>
            <div className="content_price">
              <span>Flat ₹100 off</span>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png"
              alt="1"
              className="content_imag"
            />
            <div className="content_category">
            <p>Spa for Women</p>
            </div>
            <div className="content_price">
              <span>Free head massage</span>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg"
              alt="1"
              className="content_imag"
            />
            <div className="content_category">
              <p>Massage for Men</p>
            </div>
            <div className="content_price">
              <span>Starts at ₹499</span>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"
              alt="1"
              className="content_imag"
            />
            <div className="content_category">
              <p>Salon Prime</p>
            </div>
            <div className="content_price">
              <span>Free Waxing</span>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg"
              className="content_imag"
            />
            <div className="content_category">
              <p>Party Makeup</p>
            </div>
            <div className="content_price">
              <span>Trained Artists</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// import { IconButton } from "@chakra-ui/react";

export default class SliderOne extends Component {
  render() {
    var settings = {
    //   dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
        {/* Left Icon */}
      {/* <IconButton
        marginTop={"7%"} marginLeft={"-48%"}
        aria-label="left-arrow"
        colorScheme="white" shadow={"2px 2px 4px #c0c0c0"} color={"black"} backgroundColor={"white"}
        borderRadius="full"
        position="absolute"
        // left={side}
        // top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        //onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton> */}
      {/* <IconButton
        marginTop={"7%"} marginLeft={"45%"}
        aria-label="right-arrow"
        colorScheme="white" shadow={"2px 2px 4px #c0c0c0"} color={"black"} backgroundColor={"white"}
        borderRadius="full"
        position="absolute"
        // right={side}
        // top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        //onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton> */}
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
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg" alt="1" style={{paddingRight:"4%"}}/>
          </div>
          {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
          {/* Right Icon */}
      
        </Slider>
      </div>
    );
  }
}

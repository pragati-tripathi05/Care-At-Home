import React, { Component } from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";

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
      <IconButton
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
      </IconButton>
      <IconButton
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
      </IconButton>
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

// import React from "react";
// import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// // And react-slick as our Carousel Lib
// import Slider from "react-slick";

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function SliderOne({ data }) {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState(1);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   // These are the images used in the slide

//   return (
//     <Box
//       m={8}
//       position={"relative"}
//       height={"300px"}
//       width={"300px"}
//       bg={"#F3F7FB"}
//       overflow={"hidden"}
//     >
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         marginTop={"0px"}
//         aria-label="left-arrow"
//         colorScheme="whiteAlpha"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}
//       >
//         <BiLeftArrowAlt />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         marginTop={"0px"}
//         aria-label="right-arrow"
//         colorScheme="whiteAlpha"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}
//       >
//         <BiRightArrowAlt />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {data?.map((url, index) => (
//           <Box
//             key={index}
//             height={350}
//             width={"100%"}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${url})`}
//           >
            
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// }
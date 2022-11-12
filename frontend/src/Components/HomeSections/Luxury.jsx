import React from 'react';
import "./SsmServices.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Luxury = () => {
  return (
    <div>
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>UC Luxury Experience</h1>
          <p>Top Professionals | Best Brands | Premium Experience</p>
        </div>
        <div className="offer_content">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">

          <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Salon Luxe</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Salon For Men Royale</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Spa Luxe</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Massage Therapy For Men Royale</p>
                </div>
              </div>
            </Box>

            
          </SimpleGrid>
        </div>
      </div>
    </div>
  )
}

export default Luxury

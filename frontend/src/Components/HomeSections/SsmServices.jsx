import React from 'react';
import "./SsmServices.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

const SsmServices = () => {
  return (
    <div>
       <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Salon, Spa and Massage Services</h1>
          <p>Hygienic & Single-use products | Low-contact services</p>
        </div>
        <div className="offer_content">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">

          <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Salon Prime</p>
                </div>
                <div className="content_price">
                  <span>Free Waxing</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Salon for Men</p>
                </div>
                <div className="content_price">
                  <span>Flat ₹100 off</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Spa for Women</p>
                </div>
                <div className="content_price">
                  <span>Free head massage</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Massage for Men</p>
                </div>
                <div className="content_price">
                  <span>Starts at ₹499</span>
                </div>
              </div>
            </Box>

            
          </SimpleGrid>
        </div>
      </div>
    </div>
  )
}

export default SsmServices

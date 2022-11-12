import React from 'react';
import "./SsmServices.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

const PestControl = () => {
  return (
    <div>
       <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Cleaning & Pest Control</h1>
        </div>
        <div className="offer_content">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">

          <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Bathroom & Kitchen Cleaning</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Full Home Cleaning</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Sofa & Carpet Cleaning</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Cockroach, Ant & General Pest Control</p>
                </div>
              </div>
            </Box>

            
          </SimpleGrid>
        </div>
      </div>
    </div>
  )
}

export default PestControl

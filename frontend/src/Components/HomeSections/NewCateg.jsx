import React from "react";
import "./NewCateg.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

const NewCateg = () => {
  return (
    <div>
      <div className="newcateg_offer">
        <div className="offer_text">
          <h1>New Category Launches</h1>
        </div>
        <div className="offer_content">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Expert Counselling</p>
                </div>
                <div className="content_price">
                  <span>Advanced Skin Treatments</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Furniture Making, Upholestry & Polish</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Air Purifier</p>
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
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>RO Water Purifier</p>
                </div>
                <div className="content_price">
                  {/* <span>Flat ₹100 off</span> */}
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};

export default NewCateg;

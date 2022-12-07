import React from "react";
import "./SsmServices.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Repairs = () => {
  return (
    <div>
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Home Repairs</h1>
        </div>
        <div className="offer_content">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Furniture Making, Upholstery & Polish</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Carpenters</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Electricians</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Plumbers</p>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};

export default Repairs;

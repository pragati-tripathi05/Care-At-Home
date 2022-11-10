import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Appliances.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Appliances = () => {
  return (
    <div>
       <div className="appliances_container">
      {/* ===============================Appliances============================================ */}
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Appliances</h1>
          <p>Servicing, Repair, Installation & Uninstallation</p>
        </div>
        <div className="appliances_content">
          <SimpleGrid columns={[1, 2, 2, 3]} spacing="50px">
            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img

                  
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Geyser</p>
                </div>
                <div className="content_price">
                  <span>Starts at ₹249</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Water Purifier</p>
                </div>
                <div className="content_price">
                  <span>Up to 45% Off</span>
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
          </SimpleGrid>
        </div>
      </div>     
    </div>
    </div>
  )
}

export default Appliances

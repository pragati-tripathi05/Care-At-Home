import React from "react";
import "./Footer.css";
import { SimpleGrid, Box } from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      {/* ---------------------------footer top---------------------------------- */}

      <div className="footer_top">
        <ul className="Footer__countryName_ind">
          <li>About Us</li>
          <li>UC Impact</li>
          <li>Terms &amp; Conditions</li>
          <li>Privacy Policy</li>
          <li>Interest-Based Advertising</li>
          <li>Anti Discrimination Policy</li>
          <li>Blog</li>
          <li>Reviews</li>
          <li>Near Me</li>
          <li>Careers</li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Quick Links</li>
        </ul>
      </div>
      {/* ----------------------------footer_mid--------------------------------- */}
      <div className="footer_mid">
        <div class="Footer__basicRow2">
          <p style={{ color: "white", textAlign: "left" }}>
            <br />
            Serving in
          </p>
          <br />
          <ul class="Footer__countriesRoot">
            <li>
              <span class="Footer__countryName">USA</span>
              <ul>
                <li>Austin</li>
                <li>Dallas</li>
                <li>New York City</li>
              </ul>
            </li>
            <li>
              <span>IND</span>
              <ul class="Footer__countryName_ind">
                <li>Agra</li>
                <li>Ahmedabad</li>
                <li>Alwar</li>
                <li>Amritsar</li>
                <li>Aurangabad</li>
                <li>Bangalore</li>
                <li>Bhopal</li>
                <li>Bhubaneswar</li>
                <li>Chandigarh Tricity</li>
                <li>Chennai</li>
                <li>Coimbatore</li>
                <li>Cuttack</li>
                <li>Dehradun</li>
                <li>Delhi NCR</li>
                <li>Guntur</li>
                <li>Guwahati</li>
                <li>Gwalior</li>
                <li>Hyderabad</li>
                <li>Indore</li>
                <li>Jabalpur</li>
                <li>Jaipur</li>
                <li>Jamshedpur</li>
                <li>Jodhpur</li>
                <li>Kakinada</li>
                <li>Kanpur</li>
                <li>Karnal</li>
                <li>Kochi</li>
                <li>Kolkata</li>
                <li>Kota</li>
                <li>Lucknow</li>
                <li>Ludhiana</li>
                <li>Madurai</li>
                <li>Meerut</li>
                <li>Mumbai</li>
                <li>Mysore</li>
                <li>Nagpur</li>
                <li>Nashik</li>
                <li>Panipat</li>
                <li>Patna</li>
                <li>Prayagraj</li>
                <li>Pune</li>
                <li>Raipur</li>
                <li>Rajahmundry</li>
                <li>Ranchi</li>
                <li>Rohtak</li>
                <li>Sonipat</li>
                <li>Surat</li>
                <li>Thiruvananthapuram</li>
                <li>Udaipur</li>
                <li>Vadodara</li>
                <li>Varanasi</li>
                <li>Vijayawada</li>
                <li>Visakhapatnam</li>
                <li>Warangal</li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">UAE</span>
              <ul>
                <li>Abu Dhabi</li>
                <li>Dubai</li>
                <li>Sharjah</li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">AUS</span>
              <ul>
                <li>Melbourne</li>
                <li>Sydney</li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">SGP</span>
              <ul>
                <li>Singapore</li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">KSA</span>
              <ul>
                <li>Jeddah</li>
                <li>Riyadh</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------footer ottom------------------------------- */}

      <div className="footer_bottom">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px">
          <Box>
            <div className="f_logo">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                alt="footerlogo"
              />
            </div>
          </Box>
          <Box>
            <div className="copy_right">
              <span>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</span>
            </div>
          </Box>
          <Box>
            <div className="footer_icons">
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaFacebookSquare />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaPinterestP />
              </div>
            </div>
          </Box>
          <Box>
            <div className="footer_store">
              <img
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
                alt="pstore"
              />
              <img
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
                alt="astore"
              />
            </div>
          </Box>
        </SimpleGrid>
      </div>
      {/* ------------------------------------------------------------- */}
    </div>
  );
};

export default Footer;

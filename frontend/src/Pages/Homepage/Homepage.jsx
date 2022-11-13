import React from "react";
import "./Homepage.css";
import Footer from "../../Components/Footer/Footer";
import SliderOne from "../../Components/HomepageSliders/SliderOne";
import Appliances from "../../Components/HomeSections/Appliances";
import HomeSection from "../../Components/HomeSections/HomeSection";
import Insurance from "../../Components/HomeSections/Insurance";
import Luxury from "../../Components/HomeSections/Luxury";
import NewCateg from "../../Components/HomeSections/NewCateg";
import PestControl from "../../Components/HomeSections/PestControl";
import Repairs from "../../Components/HomeSections/Repairs";
import SliderTwo from "../../Components/HomepageSliders/SliderTwo";

const Homepage = () => {
  return (
    <>
      <HomeSection />
      <div style={{ backgroundColor: "#f2f4f6" }}>
        <br />
        <div className="outlines">
          <SliderOne />
        </div>
      </div>
      <div style={{ backgroundColor: "#f2f4f6" }}>
        <br />
        <div className="outlines" >
          <NewCateg />
        </div>
        <br />
        <div  className="outlines" >
          <Appliances />
        </div>
        <br />
        <div className="outlines">
          <SliderTwo />
        </div>
        <br />
        <div  className="outlines" >
          <PestControl />
        </div>
        <br/>
        <div  className="outlines" >
          <Luxury/>
        </div>
        <br/>
        <div  className="outlines" >
          <Repairs />
        </div>
        <br/>
        <Insurance/>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

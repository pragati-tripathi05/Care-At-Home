import React from "react";
import Footer from "../../Components/Footer/Footer";
import SliderOne from "../../Components/HomepageSliders/SliderOne";
import Appliances from "../../Components/HomeSections/Appliances";
import HomeSection from "../../Components/HomeSections/HomeSection";
import Luxury from "../../Components/HomeSections/Luxury";
import NewCateg from "../../Components/HomeSections/NewCateg";
import PestControl from "../../Components/HomeSections/PestControl";
import Repairs from "../../Components/HomeSections/Repairs";
import SsmServices from "../../Components/HomeSections/SsmServices";

const Homepage = () => {
  return (
    <>
      <HomeSection />
      <div style={{ backgroundColor: "#f2f4f6" }}>
        <br />
        <div style={{ padding: "3%", backgroundColor: "white" }}>
          <SliderOne />
        </div>
      </div>
      <div style={{ backgroundColor: "#f2f4f6" }}>
        <br />
        {/* <div style={{ padding:"3%", backgroundColor:"white"}}>
     <SliderOne/>
     </div> */}
        <div style={{ padding: "1%", backgroundColor: "white" }}>
          <NewCateg />
        </div>
        <br />
        <div style={{ padding: "1%", backgroundColor: "white" }}>
          <Appliances />
        </div>
        <br />
        <div style={{ padding: "1%", backgroundColor: "white" }}>
          <SsmServices />
        </div>
        <br />
        <div style={{ padding: "1%", backgroundColor: "white" }}>
          <PestControl />
        </div>
        <br/>
        <div style={{ padding: "1%", backgroundColor: "white" }}>
          <Luxury/>
        </div>
        <br/>
        <div style={{ padding: "1%", backgroundColor: "white" }}>
          <Repairs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

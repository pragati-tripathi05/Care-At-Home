import React from 'react';
import Footer from '../../Components/Footer/Footer';
import SliderOne from '../../Components/HomepageSliders/SliderOne';
import Appliances from '../../Components/HomeSections/Appliances';
import NewCateg from '../../Components/HomeSections/NewCateg';
import SsmServices from '../../Components/HomeSections/SsmServices';


const Homepage = () => {
  return (
   <>
    <div style={{backgroundColor:"#f2f4f6"}}>
  
      <br/>
     <div style={{ padding:"3%", backgroundColor:"white"}}>
     <SliderOne/>
     </div>
    </div>
    <div style={{backgroundColor:"#f2f4f6"}}>
      <br/>
     {/* <div style={{ padding:"3%", backgroundColor:"white"}}>
     <SliderOne/>
     </div> */}
      <div style={{ padding:"2%", backgroundColor:"white"}}>
     <NewCateg/>
     </div>
     <br/>
     <div style={{ padding:"2%", backgroundColor:"white"}}>
      <Appliances/>
      </div>
     <br/>
     <div style={{ padding:"2%", backgroundColor:"white"}}>
     <SsmServices/>
     </div>
     <Footer/>
    </div>
   </>
  )
}

export default Homepage

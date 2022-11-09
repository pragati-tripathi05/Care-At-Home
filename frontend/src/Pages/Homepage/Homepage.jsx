import React from 'react';
import Footer from '../../Components/Footer/Footer';
import SliderOne from '../../Components/HomepageSliders/SliderOne';


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
     <Footer/>
    </div>
   </>
  )
}

export default Homepage

import './App.css';
import HomeSection from './Components/HomeSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";
import Booking from './Pages/Homepage/Booking';
function App() {
  return (
    <div className="App">
      {/* <HomeSection/>
      <MainRoutes /> */}
      <Booking/>
    </div>
  );
}

export default App;

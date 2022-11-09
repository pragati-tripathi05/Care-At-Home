import './App.css';
import HomeSection from './Components/HomeSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";

function App() {
  return (
    <div className="App">
      <HomeSection/>
      <MainRoutes />
    </div>
  );
}

export default App;

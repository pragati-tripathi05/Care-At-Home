import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";
import BookingDetails from "./Components/BookingDetails";

function App() {
  return (
    <div className="App">
      {/* <MainRoutes /> */}
      <BookingDetails/>
    </div>
  );
}

export default App;

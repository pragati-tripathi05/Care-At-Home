import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";
import ProductPage from "./Components/ProductPage";

import BookingList from "./Components/BookingList";
import { HamburgerMenu } from "./Components/HamburgerMenu";






function App() {
  return (
    <div className="App">
      <MainRoutes />
      {/* <HamburgerMenu /> */}

      {/* <BookingList/> */}

    </div>
  );
}

export default App;

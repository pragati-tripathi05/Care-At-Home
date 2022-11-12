import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";
import ProductPage from "./Components/ProductPage";
import GoogleSignin from "./Components/HomeSections/GoogleSignin";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      {/* <GoogleSignin /> */}
    </div>
  );
}

export default App;

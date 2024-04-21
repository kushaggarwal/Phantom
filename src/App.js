import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Bikes from "./Bikes";
import ShopCards from "./Shop";
import LatestProducts from "./LatestProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Bikes />
      <ShopCards />
      <LatestProducts />
    </div>
  );
}

export default App;

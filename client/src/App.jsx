import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./components/single-product/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

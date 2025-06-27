import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./components/single-product/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Success from "./components/checkout/stripe-checkout/Success";
import Canceled from "./components/checkout/stripe-checkout/Canceled";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";

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
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Canceled />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

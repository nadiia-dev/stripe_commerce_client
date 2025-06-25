import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./components/single-product/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;

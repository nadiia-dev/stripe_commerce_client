import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsContextsProvider from "./context/products-context/ProductsContextProvider.jsx";
import CartContextProvider from "./context/cart-context/CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsContextsProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextsProvider>
    </BrowserRouter>
  </StrictMode>
);

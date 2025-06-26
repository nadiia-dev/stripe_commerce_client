import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsContextsProvider from "./context/products-context/ProductsContextProvider.jsx";
import CartContextProvider from "./context/cart-context/CartContextProvider.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsContextsProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartContextProvider>
      </ProductsContextsProvider>
    </BrowserRouter>
  </StrictMode>
);

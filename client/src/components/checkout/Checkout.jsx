import { use, useState } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart-context/CartContext";
import Layout from "../shared/Layout";
import Address from "./custom-checkout/Address";
import CustomCheckout from "./custom-checkout/CustomCheckout";

const Checkout = () => {
  const { itemCount, total, cartItems } = use(CartContext);
  const [shipping, setShipping] = useState();
  const addressShown = {
    display: shipping ? "none" : "block",
  };
  const cardShown = {
    display: shipping ? "block" : "none",
  };
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
        <div style={addressShown}>
          <Address setShipping={setShipping} />
        </div>
        <div style={cardShown}>
          <CustomCheckout shipping={shipping} cartItems={cartItems} />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;

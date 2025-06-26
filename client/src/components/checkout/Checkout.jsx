import { use } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart-context/CartContext";
import Layout from "../shared/Layout";
import StripeCheckout from "./stripe-checkout/StripeCheckout";

const Checkout = () => {
  const { itemCount, total } = use(CartContext);
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
        <StripeCheckout />
      </div>
    </Layout>
  );
};

export default Checkout;

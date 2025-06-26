import { useNavigate } from "react-router-dom";
import Layout from "../../shared/Layout";
import { use, useEffect } from "react";
import { CartContext } from "../../../context/cart-context/CartContext";

const Success = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = use(CartContext);

  useEffect(() => {
    if (cartItems.length !== 0) clearCart();
  }, [cartItems, clearCart]);
  return (
    <Layout>
      <div className="checkout">
        <h1>Thank you for your order</h1>
        <p>
          We are currently processing your order and will send you a
          confirmation email shortly
        </p>
        <div>
          <button
            className="button is-black nomad-btn submit"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Success;

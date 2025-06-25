import { useNavigate } from "react-router-dom";
import "./cart.styles.scss";

const Total = ({ itemsCount, total, clearCart }) => {
  const navigate = useNavigate();
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Items: {itemsCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <button
          className="button is-black"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
        <button className="button is-white" onClick={() => clearCart()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Total;

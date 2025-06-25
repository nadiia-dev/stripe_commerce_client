import { useNavigate } from "react-router-dom";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cartIcon.styles.scss";

const CartIcon = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-container" onClick={() => navigate("/cart")}>
      <img src={shoppingBag} alt="shopping-cart-icon" />
    </div>
  );
};

export default CartIcon;

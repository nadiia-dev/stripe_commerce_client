import { useNavigate } from "react-router-dom";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cartIcon.styles.scss";
import { use } from "react";
import { CartContext } from "../../context/cart-context/CartContext";

const CartIcon = () => {
  const { itemsCount } = use(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container" onClick={() => navigate("/cart")}>
      <img src={shoppingBag} alt="shopping-cart-icon" />
      {itemsCount > 0 ? <span className="cart-count">{itemsCount}</span> : null}
    </div>
  );
};

export default CartIcon;

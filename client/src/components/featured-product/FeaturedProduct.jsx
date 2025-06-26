import { useNavigate } from "react-router-dom";
import "./feturedProduct.styles.scss";
import { use } from "react";
import { CartContext } from "../../context/cart-context/CartContext";
import { isInCart } from "../../helpers";

const FeaturedProduct = ({ product }) => {
  const { title, imageUrl, price, id } = product;
  const navigate = useNavigate();
  const { addItem, cartItems, increase } = use(CartContext);

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!isInCart(id, cartItems) ? (
          <button
            className="button is-black nomad-btn"
            onClick={() => addItem(product)}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className="button is-black nomad-btn"
            id="btn-white-outline"
            onClick={() => increase(product)}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;

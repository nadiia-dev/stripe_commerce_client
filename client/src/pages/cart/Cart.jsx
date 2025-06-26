import { use } from "react";
import Layout from "../../components/shared/Layout";
import "./cart.styles.scss";
import { CartContext } from "../../context/cart-context/CartContext";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = () => {
  const {
    cartItems,
    increase,
    decrease,
    removeItem,
    itemsCount,
    total,
    clearCart,
  } = use(CartContext);

  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your Cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    product={item}
                    increase={increase}
                    decrease={decrease}
                    removeItem={removeItem}
                  />
                ))}
              </div>
              <Total
                itemsCount={itemsCount}
                total={total}
                clearCart={clearCart}
              />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Cart;

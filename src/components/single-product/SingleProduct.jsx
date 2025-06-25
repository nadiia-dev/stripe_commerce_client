import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products-context/ProductsContext";
import Layout from "../shared/Layout";
import "./singleProduct.styles.scss";

const SingleProduct = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const { products } = use(ProductsContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const singleProduct = products.find(
      (product) => Number(product.id) === Number(id)
    );
    console.log(singleProduct);

    if (!singleProduct) {
      navigate("/shop");
    }

    setProduct(singleProduct);
  }, [products, id, navigate]);

  if (!product) {
    return null;
  }
  const { imageUrl, title, price, description } = product;

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              ADD TO CART
            </button>

            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;

import { use } from "react";
import { ProductsContext } from "../../context/products-context/ProductsContext";
import FeaturedProduct from "../featured-product/FeaturedProduct";

const FeaturedCollection = () => {
  const { products } = use(ProductsContext);
  const featured = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct product={product} key={product.id} />);

  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Featured Collection</h2>
      <div className="products">{featured}</div>
    </div>
  );
};

export default FeaturedCollection;

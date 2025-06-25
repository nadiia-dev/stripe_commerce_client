import { use } from "react";
import Layout from "../../components/shared/Layout";
import { ProductsContext } from "../../context/products-context/ProductsContext";
import FeaturedProduct from "../../components/featured-product/FeaturedProduct";

const Shop = () => {
  const { products } = use(ProductsContext);
  const allProducts = products.map((product) => (
    <FeaturedProduct product={product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
};

export default Shop;

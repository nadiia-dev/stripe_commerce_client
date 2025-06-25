import { useState } from "react";
import SHOP_DATA from "../../shop/index.js";
import { ProductsContext } from "./ProductsContext.jsx";

export const ProductsContextsProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  return <ProductsContext value={{ products }}>{children}</ProductsContext>;
};

export default ProductsContextsProvider;

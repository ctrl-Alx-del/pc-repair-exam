import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
function ProductPage() {
  const { slug } = useParams();

  const products = useContext(ProductsContext);

  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="productPage">
      <h1>{product.title}</h1>
      <p>{product.lager}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductPage;

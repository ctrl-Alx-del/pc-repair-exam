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
    <div className="productPage mx-auto w-200 flex flex-row">
      <img className="imageSize" src={product.imageUrl} alt={product.title} />
      <div className="p-8 flex justify-end">
        <div className="flex flex-col">
          <h1>{product.title}</h1>
          <p>Lager haves: {product.lager}</p>
          <p>Pris: {product.price} kr.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

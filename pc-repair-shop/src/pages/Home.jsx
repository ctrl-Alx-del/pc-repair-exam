import PostCard from "../components/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
function Home() {
  const products = useContext(ProductsContext);

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="Home">
      {/* {products.map((product) => ( */}
      <PostCard key={products._id} product={products} />
      {/* ))} */}
    </div>
  );
}

export default Home;

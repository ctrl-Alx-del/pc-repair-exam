import PostCard from "../components/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServicesCards";

function Home() {
  const products = useContext(ProductsContext);

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="Home">
      {/* {products.map((product) => ( */}
      <PostCard key={products._id} product={products} />
      {/* ))} */}
      <Banner />
      <ServiceCard />
    </div>
  );
}

export default Home;

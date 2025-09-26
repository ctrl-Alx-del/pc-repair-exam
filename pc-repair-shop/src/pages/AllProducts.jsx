import { useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductContext";

function AllProducts() {
  const products = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const navigate = useNavigate();
  const handleViewProduct = (slug) => {
    navigate(`/products/${slug}`);
  };

  function filterPrice() {
    const minPrice = document.querySelector(".MinPrice").value;
    const maxPrice = document.querySelector(".MaxPrice").value;

    if (minPrice >= 0 && maxPrice > 0 && minPrice < maxPrice) {
      const MinMaxFilter = products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
      setFilteredProducts(MinMaxFilter);
    }
  }
  //man kan lave et array hvor man remover duplicates ved at pushe og fjerne dem, så man kun har det resterende tilbage i et place/history-array

  return (
    <div className="p-8 w-350 mx-auto flex flex-row gap-4">
      <div className="inputFields flex flex-col">
        <input className="MaxPrice" type="number" placeholder="Øvre Pris" onChange={filterPrice}></input>
        <input className="MinPrice" type="number" placeholder={0} onChange={filterPrice}></input>
      </div>
      <div className="productContainer">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold mb-4">Produkter</h1>
          {/* {products.length === 0 && <p>No posts found.</p>} */}
        </div>
        <div className={"allProducts"}>
          {filteredProducts.map((element) => (
            <div key={element._id} className="productCardContainer">
              {/* <h2 className="text-lg font-semibold">{post.title}</h2>
              <PortableText value={post.body} />
              <p className="mt-2">Lager: {post.lager}</p>
              <p className="mt-2">Pris: {post.price} .kr</p> */}
              <p>{element.title}</p>
              <p>Lager: {element.lager}</p>
              <p>Pris: {element.price} kr.</p>
              <PortableText value={element.body} />
              <button onClick={() => handleViewProduct(element.slug)}>Se produkt</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;

import { ProductsContext } from "../context/ProductContext";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const products = useContext(ProductsContext);

  const [searchedProducts, setSearchedProducts] = useState(products);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  function handleSearch(element) {
    const value = element.target.value.toLowerCase();
    setSearchInput(value);
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(value));
    setSearchedProducts(filteredProducts);

    if (value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }

  const navigate = useNavigate();
  const handleViewProduct = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <>
      <div>
        <div className="searchBarContainer">
          <input
            value={searchInput}
            className="rounded-full w-40 h-10 searchBar focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 focus:w-60"
            type="text"
            placeholder="Søg"
            onChange={handleSearch}
          />
        </div>
        <div className="results">
          {searchedProducts.map((product) => (
            <button className="flex flex-col" key={product._id} onClick={() => handleViewProduct(product.slug)}>
              {" "}
              <div>{isEmpty ? "" : product.title}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchBar;

import { useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import { useStars } from "../context/UseStarContext";
import { useCart } from "../context/UseCartCombined.jsx";

function AllProducts() {
  const products = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const { clicked, setClicked } = useStars(productsClicked);

  const { addToCart } = useCart();
  const { removeFromCart } = useCart();

  function productsClicked() {
    let length = [];
    products.map((element) => {
      element = false;
      length.push(element);
    });
    return length;
  }

  function handleClick(elementIndex) {
    const newClicked = [...clicked];
    newClicked[elementIndex] = !clicked[elementIndex];
    setClicked(newClicked);

    const selectedProduct = products[elementIndex];

    if (newClicked[elementIndex]) {
      addToCart(selectedProduct);
    } else {
      removeFromCart(selectedProduct._id);
    }
  }

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

  function sortingDown() {
    const sortProducts = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortProducts);
  }

  function sortingUp() {
    const sortProducts = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortProducts);
  }

  return (
    <div className="p-8 w-350 mx-auto flex flex-row gap-4 allProductsContainer">
      <div className="inputFields flex flex-col">
        <div className="flex justify-around mb-4 sortingButtons">
          <button className="sortingUpButton" onClick={sortingUp}>
            Up
          </button>
          <button onClick={sortingDown}>Down</button>
        </div>
        <div className="inputContainer flex flex-col">
          <input className="MaxPrice" type="number" placeholder="Øvre Pris" onChange={filterPrice}></input>
          <input className="MinPrice" type="number" placeholder={0} onChange={filterPrice}></input>
        </div>
      </div>
      <div className="productContainer">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold mb-4">Produkter</h1>
          {/* {products.length === 0 && <p>No posts found.</p>} */}
        </div>
        <div className={"allProducts"}>
          {filteredProducts.map((element, index) => (
            <div key={element._id} className="productCardContainer">
              {/* <h2 className="text-lg font-semibold">{post.title}</h2>
              <PortableText value={post.body} />
              <p className="mt-2">Lager: {post.lager}</p>
              <p className="mt-2">Pris: {post.price} .kr</p> */}
              <div className="flex justify-end">
                <img
                  key={element._id}
                  src={clicked[index] ? "./src/assets/starFilled.png" : "./src/assets/star.png"}
                  onClick={() => handleClick(index)}
                  alt="Star icons created by Pixel perfect - Flaticon"
                  className="w-8"
                ></img>
              </div>
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

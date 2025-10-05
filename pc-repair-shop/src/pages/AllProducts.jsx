import { useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import { useStars } from "../context/UseStarContext";
import { useCart } from "../context/UseCartCombined.jsx";
import star from "../assets/star.png";
import starFilled from "../assets/starFilled.png";
import downArrow from "../assets/down-arrow.png";
import upArrow from "../assets/up-arrow.png";

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
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Sortering</h2>
          <div className="flex justify-around mb-4 sortingButtons">
            <button className="sortingUpButton" onClick={sortingUp}>
              <img src={upArrow} className="upArrow" alt="up-arrow" />
            </button>
            <button onClick={sortingDown}>
              <img src={downArrow} className="downArrow" alt="down-arrow" />
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Filtrering</h2>
          <div className="inputContainer flex flex-col">
            <input className="MaxPrice" type="number" placeholder="Øvre Pris" onChange={filterPrice}></input>
            <input className="MinPrice" type="number" placeholder={0} onChange={filterPrice}></input>
          </div>
        </div>
      </div>
      <div className="productContainer">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold mb-4">Produkter</h1>
          {/* <a href="https://www.flaticon.com/free-icons/upload" title="upload icons">Upload icons created by Kiranshastry - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/download" title="download icons">Download icons created by Kiranshastry - Flaticon</a> */}
        </div>
        <div className={"allProducts"}>
          {filteredProducts.map((element, index) => (
            <div key={element._id} className="productCardContainer">
              <div className="flex justify-end">
                <p className="mr-2">Tilføj til kurv</p>{" "}
                <img key={element._id} src={clicked[index] ? starFilled : star} onClick={() => handleClick(index)} alt="Star icons created by Pixel perfect - Flaticon" className="w-8"></img>
              </div>
              <img className="imageSize" src={element.imageUrl} alt={element.title} />
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

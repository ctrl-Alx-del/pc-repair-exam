// import { useState } from "react";
// import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/UseCartCombined.jsx";
import { useStars } from "../context/UseStarContext";
import { useMediaQuery } from "usehooks-ts";
import * as React from "react";
import star from "../assets/star.png";
import starFilled from "../assets/starFilled.png";

function PostCard({ product }) {
  const isMobile = useMediaQuery("(max-width: 412px)");

  const { addToCart } = useCart();
  const { removeFromCart } = useCart();

  const { clicked, setClicked } = useStars(productsClicked);

  const navigate = useNavigate();
  const handleViewProduct = (slug) => {
    navigate(`/products/${slug}`);
  };

  function productsClicked() {
    let length = [];
    product.map((element) => {
      element = false;
      length.push(element);
    });
    return length;
  }

  function handleClick(elementIndex) {
    const newClicked = [...clicked];
    newClicked[elementIndex] = !clicked[elementIndex];
    setClicked(newClicked);

    const selectedProduct = product[elementIndex];

    if (newClicked[elementIndex]) {
      addToCart(selectedProduct);
    } else {
      removeFromCart(selectedProduct._id);
    }
  }

  return (
    <div className={isMobile ? "w-88 mx-auto p-4" : "p-8 w-200 mx-auto"}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4">Produkter</h1>
        <Link to="/alle-produkter">Se alle produkter</Link>
      </div>
      <Carousel className={isMobile ? "w-full" : "w-200 mx-auto"}>
        <CarouselNext />
        <CarouselContent>
          {product.map((element, index) => (
            <CarouselItem key={element._id} className={isMobile ? "basis-1/1" : "basis-1/5"}>
              <div className="flex justify-end">
                <p className="mr-2">Tilføj til kurv</p>{" "}
                <img key={element._id} src={clicked[index] ? starFilled : star} onClick={() => handleClick(index)} alt="Star icons created by Pixel perfect - Flaticon" className="w-8"></img>
              </div>
              <img src={element.imageUrl} alt={element.title} />
              <p>{element.title}</p>
              <p>{element.lager}</p>
              <p>{element.price}</p>
              <PortableText value={element.body} />
              <button className="text-center productButton" onClick={() => handleViewProduct(element.slug)}>
                Se produkt
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default PostCard;

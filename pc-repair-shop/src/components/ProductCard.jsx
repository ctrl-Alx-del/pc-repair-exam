import { useState } from "react";
// import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/UseCartCombined.jsx";

function PostCard({ product }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   client.fetch(`*[_type == "post"]{_id, title, body, price, lager}`).then(setPosts);
  // }, []);

  const { addToCart } = useCart();
  const { removeFromCart } = useCart();

  const navigate = useNavigate();
  const handleViewProduct = (slug) => {
    navigate(`/products/${slug}`);
  };

  const [clicked, setClicked] = useState(productsClicked);

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
      console.log("Removing:", selectedProduct._id, "Cart before:", selectedProduct);
      removeFromCart(selectedProduct._id);
      console.log("Cart after:", selectedProduct);
    }
  }

  return (
    <div className="p-8 w-200 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4">Produkter</h1>
        {/* {products.length === 0 && <p>No posts found.</p>} */}
        <Link to="/alle-produkter">Se alle produkter</Link>
      </div>
      <Carousel className={"w-200 mx-auto"}>
        <CarouselNext />
        <CarouselContent>
          {product.map((element, index) => (
            <CarouselItem key={element._id} className="basis-1/5">
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
              <p>{element.lager}</p>
              <p>{element.price}</p>
              <PortableText value={element.body} />
              <button onClick={() => handleViewProduct(element.slug)}>Se produkt</button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default PostCard;

// import { useEffect, useState } from "react";
// import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useNavigate } from "react-router-dom";

function PostCard({ product }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   client.fetch(`*[_type == "post"]{_id, title, body, price, lager}`).then(setPosts);
  // }, []);

  const navigate = useNavigate();
  const handleViewProduct = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="p-8 w-200 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4">Produkter</h1>
        {/* {products.length === 0 && <p>No posts found.</p>} */}
        <a href="pages/ProductPage.jsx">Se alle produkter</a>
      </div>
      <Carousel className={"w-200 mx-auto"}>
        <CarouselNext />
        <CarouselContent>
          {product.map((element) => (
            <CarouselItem key={element._id} className="basis-1/5">
              {/* <h2 className="text-lg font-semibold">{post.title}</h2>
              <PortableText value={post.body} />
              <p className="mt-2">Lager: {post.lager}</p>
              <p className="mt-2">Pris: {post.price} .kr</p> */}
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

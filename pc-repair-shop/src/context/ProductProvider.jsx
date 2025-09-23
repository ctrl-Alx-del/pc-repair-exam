import { useState, useEffect } from "react";
import { ProductsContext } from "./ProductContext";
import { client } from "../lib/sanity";

// Provider component
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your CMS
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "post"]{
          _id,
          title,
          body,
          lager,
          "slug": slug.current,
          price
        }`);

        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>;
}

import "./App.css";
import Header from "./components/Header.jsx";
import Magebird from "./components/magebird.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import { ProductsProvider } from "./context/ProductProvider.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Magebird />
        <Header />
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kontakt" element={<Contacts />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/alle-produkter" element={<AllProducts />} />
          </Routes>
        </ProductsProvider>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;

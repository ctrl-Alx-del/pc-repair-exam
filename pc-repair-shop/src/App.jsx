import "./App.css";
import Header from "./components/Header.jsx";
import Magebird from "./components/magebird.jsx";
import PostCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Magebird />
      <Header />
      <PostCard />
      <Footer />
    </>
  );
}

export default App;

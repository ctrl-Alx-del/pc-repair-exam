import "./SearchBar.jsx";
import SearchBar from "./SearchBar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
import { useCart } from "../context/UseCartCombined.jsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "usehooks-ts";
import purchase from "../assets/purchase.png";
import login from "../assets/profile.png";
import menu from "../assets/menu.png";

function Header() {
  const { cart } = useCart();

  const isMobile = useMediaQuery("(max-width: 412px)");

  return (
    <>
      {isMobile ? (
        <div className="Header z-2 relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <DropdownMenuLabel className={"text-white"}>
                <img className="menuImg" src={menu} alt="Burger menu icons created by Shahryar MInhas - Flaticon" />
              </DropdownMenuLabel>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/alfix">Hjem</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/about">Om os</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/kontakt">Kontakt</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="mobileContainer flex flex-col">
            <h1 className="text-white text-4xl text-center mt-4 logoTitle">Alfix</h1>
            <SearchBar />
          </div>
          <div className="">
            <Popover>
              <PopoverTrigger>
                <img className="basketImg" src={purchase} alt="Basket icons created by Afian Rochmah Afif - Flaticon" /> <p className="basketText">Kurv</p>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="kurvContainer">
                  <h2 className="text-center">Kurv</h2>
                  <div className="kurvLength">Kurv Størrelse: {cart.length}</div>
                  <div className="kurvTitle flex flex-col">
                    {cart.map((product) => (
                      <div key={product._id}>
                        <div className="kurvItem">{product.title}</div>
                        <hr></hr>
                      </div>
                    ))}
                  </div>
                  <Link to="/checkout">Checkout</Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover>
              <PopoverTrigger>
                <img className="loginImg" src={login} alt="My profile icons created by Nuricon - Flaticon" /> <p className="loginText">Login</p>
              </PopoverTrigger>
              <PopoverContent className="w-80">CONTENT</PopoverContent>
            </Popover>
          </div>
        </div>
      ) : (
        <div className="Header z-2 relative">
          <div className="logo">
            <Link className="LogoLink" to={"/alfix"}>
              <h1 className="text-white text-5xl logoTitle">Alfix</h1>
            </Link>
          </div>
          <div className="about">
            <Link to="/about" className="text-white aboutLink">
              Om os
            </Link>
          </div>
          <div className="kontakt">
            <Link to="/kontakt" className="text-white kontaktLink">
              Kontakt
            </Link>
          </div>

          <SearchBar />
          <div className="">
            <Popover>
              <PopoverTrigger>
                <img className="basketImg" src="./src/assets/purchase.png" alt="Basket icons created by Afian Rochmah Afif - Flaticon" /> <p className="basketText">Kurv</p>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="kurvContainer">
                  <h2 className="text-center">Kurv</h2>
                  <div className="kurvLength">Kurv Størrelse: {cart.length}</div>
                  <div className="kurvTitle flex flex-col">
                    {cart.map((product) => (
                      <div key={product._id}>
                        <div className="kurvItem">{product.title}</div>
                        <hr></hr>
                      </div>
                    ))}
                  </div>
                  <Link to="/checkout">Checkout</Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover>
              <PopoverTrigger>
                <img className="loginImg" src="./src/assets/profile.png" alt="My profile icons created by Nuricon - Flaticon" /> <p className="loginText">Login</p>
              </PopoverTrigger>
              <PopoverContent className="w-80">CONTENT</PopoverContent>
            </Popover>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

import reactLogo from "../assets/react.svg";
import "./SearchBar.jsx";
import SearchBar from "./SearchBar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
import { useCart } from "../context/UseCartCombined.jsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "usehooks-ts";

function Header() {
  const { cart } = useCart();

  const isMobile = useMediaQuery("(max-width: 412px)");

  return (
    <>
      {isMobile ? (
        <div className="Header z-2 relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <DropdownMenuLabel className={"text-white"}>Menu</DropdownMenuLabel>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/">Hjem</Link>
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
      ) : (
        <div className="Header z-2 relative">
          <div className="logo">
            <Link to={"/"}>
              <img src={reactLogo} alt="logo" /> PC Repair Shop
            </Link>
          </div>
          <div className="about">
            <Link to="/about" className="text-white">
              Om os
            </Link>
          </div>
          <div className="kontakt">
            <Link to="/kontakt" className="text-white">
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

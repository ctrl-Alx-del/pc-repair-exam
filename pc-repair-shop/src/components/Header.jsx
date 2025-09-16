import reactLogo from "../assets/react.svg";
import "./SearchBar.jsx";
import SearchBar from "./SearchBar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
function Header() {
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img src={reactLogo} alt="" /> <p>PC Repair Shop</p>
        </div>
        <div className="about">
          <a href="">Om os</a>
        </div>
        <SearchBar />
        <div>
          <a href="">
            <img className="basketImg" src="./src/assets/purchase.png" alt="Basket icons created by Afian Rochmah Afif - Flaticon" /> <p className="basketText">Kurv</p>
          </a>
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
    </>
  );
}

export default Header;

import reactLogo from "../assets/react.svg";
import "./SearchBar.jsx";
import SearchBar from "./SearchBar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="logo">
          <Link to={"/"}>
            <img src={reactLogo} alt="logo" /> PC Repair Shop
          </Link>
        </div>
        <div className="about">
          <Link to="/about">Om os</Link>
        </div>
        <div className="kontakt">
          <Link to="/kontakt">Kontakt</Link>
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

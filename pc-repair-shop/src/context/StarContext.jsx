// StarContext.js
import { useState } from "react";
import { StarContext } from "./UseStarCombined.js";

export const StarProvider = ({ children }) => {
  const [clicked, setClicked] = useState([]);

  return <StarContext.Provider value={{ clicked, setClicked }}>{children}</StarContext.Provider>;
};

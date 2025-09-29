import { useContext } from "react"; //useContext
import { StarContext } from "./UseStarCombined.js";

export const useStars = () => useContext(StarContext);

import { ReactElement } from "react";
import IBrazilianStates from "./IBrazilianStates";

interface ICard {
  icon: ReactElement;
  textTop: string;
  textBottom: string;
  options: IBrazilianStates[];
}

export default ICard;
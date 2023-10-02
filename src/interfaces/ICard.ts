import { ReactElement } from "react";

interface ICard {
  icon: ReactElement;
  textTop: string;
  textBottom: string;
  options: string[];
  endpoint: string;
}

export default ICard;
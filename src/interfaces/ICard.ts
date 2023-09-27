import IDataCard from "./IDataCard";
import { ReactElement } from "react";

interface ICard {
  icon: ReactElement;
  textTop: string;
  textBottom: string;
  content: IDataCard[]
}

export default ICard;
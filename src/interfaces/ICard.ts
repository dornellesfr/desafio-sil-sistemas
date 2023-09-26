import ICovidCases from "./ICovidCases";

interface ICard {
  icon: string;
  textTop: string;
  selects?: string;
  textBottom: string;
  color: string;
  content?: ICovidCases
}

export default ICard;
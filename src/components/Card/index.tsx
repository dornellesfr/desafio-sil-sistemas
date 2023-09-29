import { useEffect, useState } from 'react';

import ICard from '../../interfaces/ICard';
// import Loading from '../Loading';
import StyledCard from './style';
import getDataApi from '../../utils/getApiData';

function Card(props: ICard) {
  const [cardContent, setCardContent] = useState(-1);
  const [selectItem, setSelectItem] = useState(props.options[0].name)

  useEffect(() => {
    const dataCard = async () => {
      const result: number = await getDataApi(`api/covidstatesbr/${selectItem}`);
      setCardContent(result);
    }

    dataCard();
  }, [selectItem]);

  function changeSelectTextCard(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectItem(event.target.value)
  }

  return (
    <StyledCard>
      <h2><i>{props.icon}</i>{props.textTop}</h2>
      <select onChange={ changeSelectTextCard }>
        { props.options.map(({ id, name }) => (
          <option key={id} value={name}>{selectItem}</option>
          )) }
      </select>
      <p className='primary-info'>{cardContent}</p>
      <a className='link-info' href="#">{props.textBottom}</a>
    </StyledCard>
  )
}

export default Card;
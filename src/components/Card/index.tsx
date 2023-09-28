import { useState } from 'react';

import ICard from '../../interfaces/ICard';
// import Loading from '../Loading';
import StyledCard from './style';

function Card(props: ICard) {
  const [mainCardText, setMainCardText] = useState(props.content[0].main);

  function changeSelectTextCard(event: React.ChangeEvent<HTMLSelectElement>) {
    setMainCardText(props.content[parseInt(event.target.value)].main)
  }

  return (
    <StyledCard>
      <h2><i>{props.icon}</i>{props.textTop}</h2>
      <select onChange={ changeSelectTextCard }>
        { props.content.map(({ id, select }) => (
          <option key={id} value={id}>{select}</option>
          )) }
      </select>
      <p className='primary-info'>{mainCardText}</p>
      <a className='link-info' href="#">{props.textBottom}</a>
    </StyledCard>
  )
}

export default Card;
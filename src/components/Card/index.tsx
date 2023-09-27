import { ChangeEventHandler, useState } from 'react';
import ICard from '../../interfaces/ICard';
import Loading from '../Loading';

function Card(props: ICard) {
  const [mainCardText, setMainCardText] = useState(props.content[0].main);
  // const [isLoading, setIsLoading] = useState(true);

  if (!props.content[0].select) {
    return (
      <section>
        <span>{props.icon}</span>
        <p>{mainCardText}</p>
        <p>{props.textTop}</p>
        <p>{props.textBottom}</p>
      </section>
    );
  }

  function changeSelectTextCard(event: React.ChangeEvent<HTMLSelectElement>) {
    setMainCardText(props.content[parseInt(event.target.value)].main)
  }

  return (
    <section>
      <span>{props.icon}</span>
      <select onChange={ changeSelectTextCard }>
        { props.content.map(({ id, select }) => (
          <option key={id} value={id}>{select}</option>
        )) }
      </select>
      <p>{mainCardText}</p>
      <p>{props.textTop}</p>
      <p>{props.textBottom}</p>
    </section>
  )
}

export default Card;
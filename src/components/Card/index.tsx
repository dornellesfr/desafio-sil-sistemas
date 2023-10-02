/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import ICard from '../../interfaces/ICard';
import Loading from '../Loading';
import StyledCard from './style';
import getDataApi from '../../utils/getApiData';
import ErrorIcon from '@mui/icons-material/Error';
import Button from '@mui/material/Button';

function Card(props: ICard) {
  const [apiData, setApiData] = useState<number | string>();
  const [selectItem, setSelectItem] = useState<string>(props.options[0].name);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mainContent, setMainContent] = useState<JSX.Element | undefined>();

  function loadApi() {
    const dataCard = async () => {
      const result: number | string = await getDataApi(`api/covidstatesbr/${selectItem}`);
      if (result === 'err') {
        setMainContent(errorApi);
        setIsLoading(false);
      } else {
        setApiData(result);
        setIsLoading(false);
      }
    };

    dataCard();
  }

  useEffect(() => {
    loadApi();
  }, [selectItem]);

  useEffect(() => {
    setMainContent(sucessfulData);
  }, [apiData]);

  function handleMainTextCard(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectItem(event.target.value);
    setIsLoading(true);
  }

  function handleReloadApi() {
    setIsLoading(true);
    loadApi();
  }

  const sucessfulData = (
  <p
    className='primary-info'>{apiData}
  </p>);

  const errorApi = (
    <div className='info-to-reload'>
      <ErrorIcon />
      <p>Request failed!</p>
      <Button
        variant="contained"
        onClick={ handleReloadApi }
        className='button-reload'
      >
        Reload
      </Button>
    </div>
  );

  return (
    <StyledCard>
      <h2><p>{props.icon}</p>{props.textTop}</h2>
      <select onChange={ handleMainTextCard }>
        { props.options.map(({ id, name }) => (
          <option key={id} value={name}>{name}</option>
          )) }
      </select>
      { isLoading ? <Loading /> : mainContent }
      <a className='link-info' href="#">{props.textBottom}</a>
    </StyledCard>
  );
}

export default Card;
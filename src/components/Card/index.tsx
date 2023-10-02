/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import ICard from '../../interfaces/ICard';
import Loading from '../Loading';
import StyledCard from './style';
import getDataApi from '../../utils/getApiData';
import ErrorIcon from '@mui/icons-material/Error';
import Button from '@mui/material/Button';

function Card(props: ICard) {
  const [apiData, setApiData] = useState<string | number | null>(null);
  const [selectItem, setSelectItem] = useState<string>(props.options[0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mainContent, setMainContent] = useState<JSX.Element>(Loading);

  async function loadApi() {
    const endpoint = props.endpoint + selectItem;
    try {
      const result = await getDataApi(endpoint);
      setApiData(result.value);
    } catch (err) {
      setMainContent(errorApi);
    } finally {
      setIsLoading(false);
    }
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
      <ErrorIcon className='icon-warning'/>
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
        { props.options.map((name) => (
          <option key={name} value={name}>{name}</option>
          )) }
      </select>
      { isLoading ? <Loading /> : mainContent }
      <a className='link-info' href="#">{props.textBottom}</a>
    </StyledCard>
  );
}

export default Card;
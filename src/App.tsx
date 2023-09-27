import { useEffect, useState } from "react";
import getDataApi from "./utils/getApiData";
import { createServer } from 'miragejs'

import Header from "./components/Header";
import Card from "./components/Card";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import TrustPilotCard from "./components/TrustPilotCard";
import StyledMain from "./styleApp";
import dataCovid from "./helpers/dataCovidCases";

function App() {
  const [covidData, setCovidData] = useState([]);
  const [posts, setPosts] = useState([])

  createServer({
    routes() {
      this.get('api/covidcases', () => {
        return dataCovid;
      });
      this.get('api/posts', () => {
        return [];
      });
    }
  })

  useEffect(() => {
    console.log(covidData);
    
  }, [covidData])

  useEffect(() => {
    const dataCovid = async () => {
      const result = await getDataApi('api/covidcases');
      setCovidData(result);      
    }

    const dataPosts = async () => {
      const result = await getDataApi('api/posts');
      setPosts(result);
    }

    dataCovid();
    dataPosts();
  }, [])

  return (
    <>
      <Header />
      <StyledMain>
        <Card
          icon={<VisibilityIcon />}
          textTop="Confirmed cases"
          textBottom="Learn how to prevent infections ➝"
          content={covidData}
        />
        <Card
          icon={<FormatListBulletedIcon />}
          textTop="Top posts"
          textBottom="Do you want more visits? Contact us!"
          content={posts}
        />
        <TrustPilotCard />
      </StyledMain>
    </>
  )
}

export default App
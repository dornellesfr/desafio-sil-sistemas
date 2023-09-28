import { useEffect, useState } from "react";

import getDataApi from "./utils/getApiData";
import Header from "./components/Header";
import Card from "./components/Card";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import TrustPilotCard from "./components/TrustPilotCard";
import StyledMain from "./styleApp";

function App() {
  const [statesBr, setStatesBr] = useState([]);
  // const [posts, setPosts] = useState([])

  useEffect(() => {
    const dataCovid = async () => {
      const result = await getDataApi('api/covidstatesbr');
      setStatesBr(result);
    }

    // const dataPosts = async () => {
    //   const result = await getDataApi('api/posts');
    //   setPosts(result);
    // }

    dataCovid();
    // dataPosts();
  }, [])

  useEffect(() => {
    console.log(statesBr);
  }, [statesBr]);
  
  return (
    <>
      <Header />
      <StyledMain>
        <Card
          icon={<VisibilityIcon />}
          textTop="Confirmed cases"
          textBottom="Learn how to prevent infections ➝"
          options={statesBr}
        />
        <Card
          icon={<FormatListBulletedIcon />}
          textTop="Top posts"
          textBottom="Do you want more visits? Contact us!"
          options={statesBr}
        />
        <TrustPilotCard />
      </StyledMain>
    </>
  )
}

export default App
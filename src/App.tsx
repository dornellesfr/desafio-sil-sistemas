import { useEffect, useState } from "react";
import getDataApi from "./utils/getApiData";

import Header from "./components/Header";
import Card from "./components/Card";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StarRateIcon from '@mui/icons-material/StarRate';
import dataCovid from "./helpers/dataCovidCases";

function App() {
  const [covidData, setCovidData] = useState([]);

  // pegar dados da api de covid :ICovidCases
  useEffect(() => {
    getDataApi('...')
  }, [])
  // pegar dados da api de posts :IPosts

  return (
    <>
      <Header />
      <Card
        icon={<VisibilityIcon />}
        textTop="Confirmed cases"
        textBottom="Learn how to prevent infections ➝"
        color="fff"
        content={dataCovid}
      />
      <Card
        icon={<FormatListBulletedIcon />}
        textTop="Top posts"
        textBottom="Do you want more visits? Contact us!"
        color="fff"
        content={dataCovid}
      />
      <Card
        icon={<StarRateIcon />}
        textTop="Top posts"
        textBottom="Do you want more visits? Contact us!"
        color="#000032"
        content={dataCovid}
      />
    </>
  )
}

export default App
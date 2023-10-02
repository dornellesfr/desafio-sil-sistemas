import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Header from "./components/Header";
import Card from "./components/Card";
import TrustPilotCard from "./components/TrustPilotCard";
import StyledMain from "./styleApp";
import brStates from "./helpers/brazilianStates";
import jokeCategory from './helpers/jokeCategory';

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Card
          icon={<VisibilityIcon />}
          textTop="Confirmed cases"
          textBottom="Learn how to prevent infections ➝"
          options={brStates}
          endpoint='api/covidstatesbr/'
        />
        <Card
          icon={<FormatListBulletedIcon />}
          textTop="Chuck Norris joke"
          textBottom="Do you want more about Chuck Norris?"
          options={jokeCategory}
          endpoint='api/chucknorrisjoke/'
        />
        <TrustPilotCard />
      </StyledMain>
    </>
  );
}

export default App;
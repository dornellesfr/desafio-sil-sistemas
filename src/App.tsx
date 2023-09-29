import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Header from "./components/Header";
import Card from "./components/Card";
import TrustPilotCard from "./components/TrustPilotCard";
import StyledMain from "./styleApp";
import brStates from "./helpers/brazilianStates";

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
        />
        <Card
          icon={<FormatListBulletedIcon />}
          textTop="Top posts"
          textBottom="Do you want more visits? Contact us!"
          options={brStates}
        />
        <TrustPilotCard />
      </StyledMain>
    </>
  )
}

export default App
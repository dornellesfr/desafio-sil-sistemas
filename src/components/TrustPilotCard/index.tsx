import StarRateIcon from '@mui/icons-material/StarRate';
import StyledTrustPilotCard from './style';

function TrustPilotCard() {
  return (
    <StyledTrustPilotCard>
      <div>
        <StarRateIcon className='icon'/>
        <h2>Trustpilot</h2>
      </div>
      <p>Show us your love bu leaving a <strong>positive</strong> review
      on trust pilot and recieve the extension of a 50 additional products</p>
      <a href='#'>Write a review on Trustpilot ➝</a>
    </StyledTrustPilotCard>
  );
}

export default TrustPilotCard;
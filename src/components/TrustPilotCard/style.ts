import styled from "styled-components";

const StyledTrustPilotCard = styled.section`
  display: grid;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #000032;
  width: 380px;
  height: 20vh;
  padding: 1.5rem;


  & div  {
    color: #00b67a;
    display: flex;
    gap: 20px;
  }

  & p {
    color: #fff;
  }

  & strong {
    color: #00b67a;
  }

  & a {
    grid-column: 1 / -1;
    grid-row: 3;
    color: #00b67a;
  }
`;

export default StyledTrustPilotCard;
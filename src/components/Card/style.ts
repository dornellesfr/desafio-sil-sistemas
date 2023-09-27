import styled from "styled-components";

const StyledCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  width: 380px;
  height: 28vh;
  padding: 1.5rem;


  & .primary-info {
    grid-row: 2;
    grid-column: 1 / -1;
    align-self: center;
    font-size: 3rem;
  }

  & .link-info {
    grid-column: 1 / -1;
    grid-row: 3;
    color: #00a8ff;
  }

  & h2 {
    text-align: center;
    grid-column: 1 / 3;
    display: flex;
    gap: 18px;
    font-size: 1rem;
    font-weight: 300;
    align-items: center;
  }

  & select {
    border: none;
    background-color: #f7f7f7;
    cursor: pointer;
    text-align: center;
    width: 50%;
    justify-self: center;
    align-self: center;
    outline: none;
  }
`;

export default StyledCard;
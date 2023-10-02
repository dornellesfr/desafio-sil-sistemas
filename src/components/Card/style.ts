import styled from "styled-components";

const StyledCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  width: 380px;
  height: 28vh;
  padding: 1rem;


  & .primary-info {
    width: 100%;
    height: 100%;
    grid-row: 2;
    grid-column: 1 / -1;
    align-self: center;
    font-size: 1.5vw;
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
    gap: 10px;
    font-size: 1.2rem;
    font-weight: 300;
    align-items: center;
  }

  & select {
    border: none;
    background-color: #f9f9f9;
    cursor: pointer;
    text-align: center;
    width: 80%;
    justify-self: center;
    align-self: center;
    outline: none;
  }

  & article {
    justify-self: center;
    align-self: center;
    grid-column: 1 / -1;
  }

  & .info-to-reload {
    display: flex;
    background-color: #ffaeae;
    border-radius: 5px;
    grid-column: 1 / -1;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    font-weight: 700;
    gap: 20px;
  }

  & .icon-warning {
    color: red;
    width: 60px;
    height: 60px;
  }

  & .button-reload {
    background-color: #fff;
    color: black;
    font-weight: 600;
    align-self: center;
    justify-self: right;
    text-transform: capitalize;
  }

  & .button-reload:hover {
    background-color: #e3e3e3;
  }

  & .button-reload:active {
    background-color: #fff;
  }
`;

export default StyledCard;
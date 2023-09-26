import styled from 'styled-components';
import IStyledHeader from '../../interfaces/IStyledHeader';

export const StyledHeader = styled.header<IStyledHeader>`
  width: 100%;
  height: 30vh;
  background-color: #97dcfb;
  display: flex;

  & .logo {
    width: 30%;
    height: 30%;
    margin: 40px 15%;
  }
`;
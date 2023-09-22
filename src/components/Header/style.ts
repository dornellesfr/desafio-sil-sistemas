import styled from 'styled-components';

interface IStyledHeader {
  img: string
}

export const StyledHeader = styled.header<IStyledHeader>`
  width: 100%;
  height: 30vh;
  background-color: #97dcfb;

  & .logo {
    background-image: url(${(props) => props.img});
    width: 100%;
    height: 100vh;
    background-position: center;
  }
`;
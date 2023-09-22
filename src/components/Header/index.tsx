import logo from '../../assets/logo.svg';
import { StyledHeader } from './style';

function Header() {
  return (
    <StyledHeader img={logo}>
      <div className='logo'  />

    </StyledHeader>
  );
}

export default Header
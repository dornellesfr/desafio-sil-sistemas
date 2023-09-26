import logo from '../../assets/logo.svg';
import { StyledHeader } from './style';

function Header() {
  return (
    <StyledHeader img={logo}>
      <img src={logo} alt="logo-sil-sistemas" className='logo' />

    </StyledHeader>
  );
}

export default Header
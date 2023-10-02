import spinner from '../../assets/loading.svg';
import StyledLoading from './style';

function Loading() {
  return (
    <StyledLoading>
      <img src={spinner} alt="spinner" />
    </StyledLoading>
  );
}

export default Loading;
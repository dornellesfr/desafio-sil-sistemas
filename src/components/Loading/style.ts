import styled from "styled-components";

const StyledLoading = styled.article`
  height: 60px;
  width: 60px;
  border: 4px solid #e3e3e3;
  border-radius: 50%;
  border-right-color: #4070f4;
  animation: spin 2s ease infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLoading;

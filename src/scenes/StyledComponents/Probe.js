import styled, { keyframes } from 'styled-components';

const probe = keyframes`
  from {
    color: red;
  }

  to {
    color: blue;
  }
`;

export default styled.div`
  animation: ${probe} 1s;
`;

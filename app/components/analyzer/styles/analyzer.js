import styled, { keyframes } from 'styled-components/macro';

const slideInFromLeft = keyframes`
   0% {
    transform: translateX(-70%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const Container = styled.div`
  width: 85%;
  position: absolute;
  left: 15%;
  bottom: 90px;
  height: 150px;
  animation: 1s ease-out 0s 1 ${slideInFromLeft};
  display: ${({ isAnalyzerShowing }) => (isAnalyzerShowing ? 'block' : 'none')};
  z-index: 1;
  @media (max-width: 1000px) {
    width: 100%;
    left: 0;
  }
`;
export const Render = styled.canvas`
  height: 100%;
  width: 100%;
  float: right;
`;

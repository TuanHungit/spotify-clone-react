import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 85%;
  position: absolute;
  left: 15%;
  bottom: 90px;
  height: 150px;
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

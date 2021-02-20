import styled from 'styled-components/macro';

export const UpperNav = styled.div`
  background-color: ${({ color }) =>
    color ? 'transparent' : `rgba(9, 9, 9, 0.78)`};
  ${({ scroll, color }) =>
    scroll && color ? `background-color: ${color};` : ''}
  height: 65px;
  width: 85%;
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s ease;
`;
export const Content = styled.div``;
export const Container = styled.div`
  width: 85%;

  overflow-y: scroll;
  position: relative;

  ${Content} {
    color: white;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Group = styled.div`
  height: calc(100vh - 90px);
  background: #131313;
  width: 100%;
  display: flex;
`;

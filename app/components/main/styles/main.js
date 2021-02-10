import styled from 'styled-components/macro';

export const UpperNav = styled.div`
  background: rgba(9, 9, 9, 0.78);
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding: 0.6rem 2rem;
  position: fixed;
  top: 0;
  z-index: 2;
`;
export const Content = styled.div``;
export const Container = styled.div`
  width: 85%;

  overflow-y: scroll;
  position: relative;
  padding-top: 4rem;
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

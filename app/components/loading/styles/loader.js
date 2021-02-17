import styled, { keyframes } from 'styled-components/macro';

const bouncedelay = keyframes`
 0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;
export const Bounce1 = styled.div``;
export const Bounce2 = styled.div``;
export const Bounce3 = styled.div``;
export const Bounce4 = styled.div``;

export const Container = styled.div`
  margin: 30px auto 30px;

  width: 70px;
  text-align: center;
  display: flex;

  justify-content: space-between;
  & > div {
    width: 12px;
    height: 12px;
    background-color: #b3b3b3;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${bouncedelay} 1.4s infinite ease-in-out both;
    animation: ${bouncedelay} 1.4s infinite ease-in-out both;
  }

  & ${Bounce1} {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  & ${Bounce2} {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  & ${Bounce3} {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
  & ${Bounce4} {
    animation: ${bouncedelay} 1.4s infinite ease-in-out both;
  }
`;

import styled from 'styled-components/macro';

export const Text = styled.div`
  color: white;
  font-family: Spotify-Bold;
  font-size: 72px;
  display: block;
  width: 100%;
  max-width: 900px;
  padding: 50px 50px;
  text-align: left;
  transition: opacity 1s ease-out;

  ${({ active }) => (active ? `opacity: 1` : `opacity: 0`)};
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 154px);
  padding-top: 4rem;
  background-color: rgb(189, 71, 91);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 0;
  @media (max-width: 1000px) {
    ${Text} {
      font-size: 48px;
      padding: 25px 25px;
      max-width: 500px;
    }
  }
`;

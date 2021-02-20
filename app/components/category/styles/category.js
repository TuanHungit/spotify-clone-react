import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0.5rem 2rem;
  padding-top: 4rem;
`;
export const Title = styled.h1`
  font-family: Spotify-Bold;
  margin: 15px 0;
`;
export const SubTitle = styled.div``;
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  margin-top: 5px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, auto);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, auto);
  }
`;
export const Item = styled.div`
  margin-bottom: 20px;
`;

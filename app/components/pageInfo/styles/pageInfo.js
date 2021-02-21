import styled from 'styled-components/macro';

export const Container = styled.div`
  max-height: 85vh;
  padding-top: 4rem;
  ${({ bg }) =>
    bg
      ? `
    
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), #121212 95%);`
      : ''}
  ${({ color, bg }) => (color && bg ? ` background-color: ${color};` : ``)}
`;
export const Image = styled.img`
  height: 232px;
  width: 232px;
  object-fit: cover;
  -webkit-box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;
export const Content = styled.div`
  text-align: left;

  width: 100%;
`;
export const Title = styled.h1`
  font-family: Spotify-Bold;

  font-size: ${({ size }) => (size ? size : '86px')};
  display: block;
  display: -webkit-box;
  heigth: 80%;
  margin: 0 auto;

  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ uppercase }) => (uppercase ? `text-transform: uppercase;` : '')}
`;
export const SubTitle = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0.5rem 0;
  font-weight: 600;
`;
export const Text = styled.p`
  display: flex;
  font-size: 0.9rem;
  position: relative;
  margin-right: 15px;
  &:first-of-type {
    font-weight: bold;
  }
`;
export const Group = styled.div`
  display: flex;
  ${({ padding }) => (padding ? `padding: 50px;` : '')}
  align-items: flex-end;
  max-height: 232px;
`;
export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const Icon = styled.img`
  margin-left: ${({ isPlaying }) => (isPlaying ? `2.5px` : '5px')};
  width: ${({ size }) => (size ? size : '35px')};
  filter: brightness(0) invert(1);
`;

export const PlayIcon = styled.span`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  ${({ background }) => (background ? ` background: ${background};` : '')}

  &:first-of-type {
    margin-left: 50px;
    margin-right: 10px;
  }
  margin: -20px 0 20px 5px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

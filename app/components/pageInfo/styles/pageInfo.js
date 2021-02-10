import styled from 'styled-components/macro';

export const Container = styled.div`
  background-color: rgb(182, 250, 206);
  max-height: 85vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), #121212 95%);
`;
export const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  -webkit-box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;
export const Content = styled.div`
  text-align: left;
  padding: 0 2rem;
`;
export const Title = styled.p`
  font-size: ${({ size }) => (size ? `size` : '5.5rem')};
  margin: 0;
  font-weight: bolder;
  ${({ uppercase }) => (uppercase ? `text-transform: uppercase;` : '')}
`;
export const SubTitle = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0.5rem 0;
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

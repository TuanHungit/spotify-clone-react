import styled from 'styled-components/macro';

export const PlayIcon = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  background: #1db954;
  opacity: 0;
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  transition: all 0.5s ease-in-out;
`;
export const Container = styled.div`
  padding-bottom: 0.8rem;

  background: rgb(24, 24, 24);
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    background: #282828;
    ${PlayIcon} {
      opacity: 1;
    }
  }
`;
export const Title = styled.h1`
  margin-bottom: 0;
`;
export const SubTitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
`;
export const Image = styled.img`
  height: 160px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;
export const List = styled.div``;
export const Content = styled.div`
  padding: 0.4rem 0;
`;

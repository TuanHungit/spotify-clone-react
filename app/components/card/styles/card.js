import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router';
export const PlayIcon = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  background: #1db954;
  opacity: 0;
  position: relative;
  left: 6.2rem;
  bottom: 4.2rem;
  margin: 0;
  transition: all 0.5s ease-in-out;
  top: 2.2rem;
`;
export const Container = styled(ReactRouterLink)`
  background: rgb(24, 24, 24);
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem;
  text-decoration: none;
  color: white;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  max-width: 160px;
  padding-bottom: 0.8rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #282828;
    ${PlayIcon} {
      opacity: 1;
      top: -4rem;
    }
  }
`;
export const Title = styled.h3`
  margin-bottom: 0;
`;
export const SubTitle = styled.p`
  margin-top: 0.5rem;
  max-width: 150px;
  color: #b3b3b3;
`;
export const Image = styled.img`
  width: 160px;
  height: 160px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  object-fit: cover;
  position: relative;
`;
export const List = styled.div``;
export const Content = styled.div`
  margin-top: -20px;
`;
export const Icon = styled.img`
  margin-left: 9px;
  width: 30px;
`;

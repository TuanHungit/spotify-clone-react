import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const PlayIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  background: #1db954;
  opacity: 0;
  position: relative;
  left: 2.8rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  margin: 0;
  transition: all 0.2s ease-in;
  top: -3rem;
`;
export const Container = styled(ReactRouterLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(24, 24, 24);
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  padding: 1.2rem;
  text-decoration: none;
  color: white;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
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
export const Title = styled.h1`
  margin-bottom: 0;
  width: 140px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubTitle = styled.p`
  margin-top: 0.5rem;
  width: 140px;
  white-space: nowrap;
  color: #b3b3b3;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Image = styled.img`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  object-fit: cover;
  position: relative;
`;
export const List = styled.div``;
export const Content = styled.div`
  margin-top: -20px;
`;
export const Icon = styled.img`
  margin-left: 6.5px;
  width: 30px;
`;

import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 15%;
  height: 100%;
  background: #040404;
  z-index: 3;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;
export const Icon = styled.img`
  filter: brightness(0) invert(0.7);
  transition: all 0.3s ease-in-out;
  width: ${({ size }) => (size ? size : '24px')};
  margin-right: 10px;
  ${({ background }) =>
    background
      ? `background-color:${background}; 
      filter: brightness(1) invert(0) !important; 
      padding: 7px;
      &:hover {
        background-color: white;
      }
      `
      : ''}
`;

export const Text = styled.p`
  color: #b3b3b3;
  font-weight: ${({ weight }) => (weight ? weight : '600px')};
  font-size: 14px;
  transition: all 0.6s ease-in-out;
`;

export const Item = styled(ReactRouterLink)`
  display: flex;
  color: #b3b3b3;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover > ${Icon} {
    filter: brightness(0) invert(1);
  }
  &:hover > ${Text} {
    color: white;
  }
  &:last-of-type {
    margin-bottom: 10px;
  }
  ${({ active }) =>
    active
      ? ` background: #282828;  
        ${Icon} {
                filter: brightness(0) invert(1);
            }
        ${Text} {
            color: white;
        }`
      : ''}
`;
export const Logo = styled.img`
  max-width: 190px;
  max-height: 110px;
  filter: brightness(0) invert(1);
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #b3b3b3;
  font-size: 14px;
  margin: 20px 0 5px 15px;
`;

export const Break = styled.div`
  border-top: 0.01px solid #282828;
  margin: 10px 12px;
`;

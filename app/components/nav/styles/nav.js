import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router';

export const Container = styled.div`
  width: 18%;
  height: 100%;
  background: #040404;
`;
export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;
export const Icon = styled.img`
  filter: brightness(0) invert(0.7);
`;

export const Text = styled.p`
  color: #b3b3b3;
  margin-left: 15px;
  font-weight: bold;
`;

export const Item = styled(ReactRouterLink)`
  display: flex;
  color: #b3b3b3;
  border-radius: 5px;
  padding: 0.7rem 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover > ${Icon} {
    filter: brightness(0) invert(1);
  }
  &:hover > ${Text} {
    color: white;
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
  max-width: 170px;
  max-height: 100px;
  filter: brightness(0) invert(1);
`;

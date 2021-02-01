import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Item = styled(ReactRouterLink)`
  margin-right: 3px;
  text-decoration: none;
  font-size: 12px;
  color: #b3b3b3 !important;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: white !important;
    transform: scale(1.1);
  }

  &:after {
    content: ', ';
  }
  &: last-of-type: after {
    content: ' ';
  }
`;

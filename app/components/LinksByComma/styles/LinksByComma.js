import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Item = styled(ReactRouterLink)`
  margin-right: 3px;
  text-decoration: none;
  margin-top: 10px;
  font-size: 12px;
  color: #3eb4bf !important;
 
  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: ', ';
  }
  &: last-of-type: after {
    content: ' ';
  }
`;

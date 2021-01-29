import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router';
export const Container = styled.div`
  min-height: 200px;
  width: 82%;
  padding-bottom: 100px;
  float: right;
  color: white;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Inner = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 10px;
  font-size: 14px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Actions = styled.div`
  width: 100%;
`;

export const ActionInner = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Share = styled.button``;

export const Other = styled.button``;

export const Title = styled(ReactRouterLink)`
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`;

export const Order = styled.p`
  line-height: 80px;
  text-align: center;
  width: 10%;
  float: left;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ direction }) =>
    direction === 'column' ? 'none' : 'center'};
  margin: 0 20px;
  width: ${({ size }) => (size ? size : 20)}%;
  justify-content: ${({ direction }) =>
    direction === 'column' ? 'flex-start' : 'space-between'};
`;

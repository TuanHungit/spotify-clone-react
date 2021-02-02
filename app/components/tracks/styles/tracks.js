import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router';
export const Container = styled.div`
  display: flex;
  min-height: 200px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 0 0 100px -20px;
  color: white;
  justify-content: center;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Inner = styled.ul`
  display: flex;
  width: 94%;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  padding: 0 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
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
  color: white;
  font-weight: bold;
`;

export const Order = styled.p`
  line-height: 80px;
  text-align: center;
  font-weight: 600;
  width: 10%;
  float: left;
`;
export const Group = styled.div`
  display: flex;
  float: left;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ direction }) =>
    direction === 'column' ? 'none' : 'center'};
  margin: 0 5px;
  width: ${({ size }) => (size ? size : `20%`)};
  justify-content: ${({ direction }) =>
    direction === 'column' ? 'flex-start' : 'space-between'};
`;

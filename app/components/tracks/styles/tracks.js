import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Inner = styled.ul`
  display: flex;
  max-width: 670px;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LazyloadImage = styled.img``;

export const Actions = styled.div``;

export const ActionInner = styled.div``;

export const Share = styled.button``;

export const Other = styled.button``;

export const Title = styled.h5``;

export const Order = styled.p``;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 50%;
  justify-content: space-between;
`;

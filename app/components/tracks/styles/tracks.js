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

export const Icon = styled.img`
  width: ${({ size }) => (size ? size : `30px`)};
  filter: brightness(0) invert(0.8);
  display: none;
  position: relative;
  margin-left: -5px;
  &:last-of-type {
    margin-left: 65px;
  }
  &:hover {
    filter: brightness(0) invert(1);
  }
  ${({ isPlaying }) =>
    isPlaying
      ? `
          color: #1db954;
          width: 24px;
          filter:none;
          content:url("https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif");
          display:block;`
      : ``}
`;

export const Order = styled.p`
  line-height: 80px;
  text-align: center;
  font-weight: 600;
  width: 20%;
`;

export const SubTitle = styled.p`
  color: #b3b3b3;
  font-weight: 600;
  text-align: center;
  margin: 0 45px;
  position: absolute;
`;

export const Title = styled(ReactRouterLink)`
  color: white;
  font-weight: bold;
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
    ${Icon} {
      display: block;
    }
    ${Order} {
      display: none;
    }
    ${SubTitle} {
      color: white;
    }
  }

  @media (max-width: 1000px) {
    font-size: 12px;
  }
  ${({ isPlayer }) =>
    isPlayer
      ? `${Title}, ${Order}{
    color: #1db954
    }
    `
      : ``}

  ${({ isPlaying }) =>
    isPlaying
      ? `
        ${Order}{
          display:none;
        }
  }`
      : ``}
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

export const Group = styled.div`
  display: flex;
  float: left;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ direction }) =>
    direction === 'column' ? 'none' : 'center'};
  margin: 0 5px;
  width: ${({ size }) => (size ? size : `20%`)};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'space-between'};
`;

import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled(ReachRouterLink)`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 12px;
  color: white;
  background-color: rgba(9, 9, 9, 0.78);
  text-decoration: none;
  padding: 10px 36px;
  border: 1px solid hsla(0, 0%, 100%, 0.7);
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
  margin-left: 20px;

  transition: all 0.1s ease-in-out;
  ${({ isLoginIcon }) =>
    isLoginIcon ? `background-color: white; color: black;` : ''}

  &: hover {
    transform: scale(1.05);
  }
`;

export const WrapperIcon = styled.div`
  border-radius: 50%;
  background-color: rgba(9, 9, 9, 0.78);
  width: 35px;
  height: 35px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: all 0.1s ease-in-out;

  &: hover {
    transform: scale(1.05);
  }
`;
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
  ${({ rotate }) => (rotate ? 'transform: rotate(180deg); ' : ``)}
`;

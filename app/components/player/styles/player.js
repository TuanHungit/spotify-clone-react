import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  background: #181818;
  text-align: center;
  height: 89px;
  border-top: 0.01px solid #282828;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 100%;
  color: white;
  z-index: 4;
  position: relative;
  overflow: hidden;
`;
export const Audio = styled.audio``;
export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: center;
  width: ${({ size }) => (size ? size : '20%')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'space-between'};
  ${({ direction }) =>
    direction ? `align-items: flex-start; margin-left: 10px;` : ''}
`;
export const Title = styled.h5`
  color: white;
  font-weight: bold;
  padding: 0;
  text-align: start;
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 20px;
  boder: 0;
`;
export const Button = styled.button`
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;

export const Icon = styled.img`
  width: ${({ size }) => (size ? size : '30px')};
  padding-left: ${({ isPlaying }) => (isPlaying ? `0.5px` : '3px')};
  filter: brightness(0) invert(${({ opacity }) => (opacity ? opacity : 1)});
  ${({ opacity, isClicked }) =>
    opacity && !isClicked
      ? `
    &:hover{
      filter: brightness(0) invert(1);
    }
  `
      : ''}
  ${({ rotate }) => (rotate ? ` transform: rotate(${rotate});` : '')}

  ${({ isClicked }) =>
    isClicked
      ? `
    filter: invert(72%) sepia(47%) saturate(4909%) hue-rotate(93deg) brightness(92%) contrast(77%);
    `
      : ''}
`;
export const TimeSeek = styled.span`
  font-size: 12px;
  color: #b3b3b3;
  font-weight: bold;
  width: 100%;
  max-width: 30px;
`;
export const WrapperIcon = styled(ReactRouterLink)`
  width: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0 7px 5px 7px;
  justify-content: center;
  cursor: pointer;
  ${({ background }) =>
    background
      ? ` height: 35px; background: ${background}; 
      ${Icon} {
        filter: brightness(0) invert(0);
        }`
      : ''}
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.07);
  }
`;

export const SoundIconContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
  display: inline-block;
`;
export const SoundIconOff = styled.div``;
export const SoundIconOne = styled.div``;
export const SoundIconTwo = styled.div``;

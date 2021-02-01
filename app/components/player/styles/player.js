import styled from 'styled-components/macro';

export const Container = styled.div`
  background: #282828;
  text-align: center;
  height: 89px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 100%;
  color: white;
  z-index: 2;
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
  &:last-of-type {
    margin-right: 20px;
  }
`;
export const Title = styled.h5`
  color: white;
  font-weight: bold;
  margin-left: 10px;
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 20px;
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
  width: 30px;
  padding-left: 3px;
  filter: brightness(0) invert(${({ opacity }) => (opacity ? opacity : 1)});

  ${({ rotate }) => (rotate ? ` transform: rotate(${rotate});` : '')}
`;
export const TimeSeek = styled.span`
  font-size: 13px;
  color: #b3b3b3;
`;
export const WrapperIcon = styled.div`
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ background }) =>
    background
      ? ` height: 40px; background: ${background}; 
      ${Icon} {
        filter: brightness(0) invert(0);
        }`
      : ''}
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.07);
  }
`;

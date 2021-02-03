import React from 'react';
import {
  Container,
  Audio,
  Group,
  Title,
  Image,
  WrapperIcon,
  Icon,
  TimeSeek
} from './styles/Player';
export default function Player({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Player.Audio = function PlayerAudio({ ...restProps }) {
  return <Audio {...restProps} />;
};
Player.Title = function PlayerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Player.Group = function PlayerGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Player.Image = function PlayerImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};

Player.TimeSeek = function PlayerTimeSeek({ children, ...restProps }) {
  return <TimeSeek {...restProps}>{children}</TimeSeek>;
};
Player.WrapperIcon = function PlayerWrapperIcon({ children, ...restProps }) {
  return <WrapperIcon {...restProps}>{children}</WrapperIcon>;
};
Player.Icon = function PlayerIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

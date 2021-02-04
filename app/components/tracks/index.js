import React from 'react';
import {
  Container,
  Inner,
  Item,
  Title,
  Actions,
  ActionInner,
  Order,
  Group,
  SubTitle,
  Icon,
  Break
} from './styles/tracks';
export default function Tracks({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Tracks.Inner = function TracksInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
Tracks.Item = function TracksItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Tracks.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Tracks.Thumbnail = function TracksThumbnail({ children, ...restProps }) {
  return <Thumbnail {...restProps}>{children}</Thumbnail>;
};
Tracks.Actions = function TracksActions({ children, ...restProps }) {
  return <Actions {...restProps}>{children}</Actions>;
};

Tracks.ActionInner = function TracksActionInner({ children, ...restProps }) {
  return <ActionInner {...restProps}>{children}</ActionInner>;
};
Tracks.Order = function TracksOrder({ children, ...restProps }) {
  return <Order {...restProps}>{children}</Order>;
};
Tracks.Group = function TracksGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Tracks.Icon = function TracksIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Tracks.SubTitle = function TracksSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Tracks.Break = function TracksBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};

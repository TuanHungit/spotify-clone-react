import React from 'react';
import { Container, Content, UpperNav, Group } from './styles/main';
export default function Main({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Main.Content = function MainContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Main.UpperNav = function MainUpperNav({ children, ...restProps }) {
  return <UpperNav {...restProps}>{children}</UpperNav>;
};
Main.Group = function MainGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

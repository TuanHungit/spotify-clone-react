import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Image,
  List,
  Content,
  PlayIcon
} from './styles/card';
export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Card.List = function CardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Card.Content = function CardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Card.PlayIcon = function CardPlayIcon({ src, children, ...restProps }) {
  return (
    <PlayIcon {...restProps}>
      <img src={src} />
      {children}
    </PlayIcon>
  );
};

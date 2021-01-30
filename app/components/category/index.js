import React from 'react';
import { Container, Title, SubTitle, Body, Item } from './styles/category';
export default function Category({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Category.Title = function CategoryCard({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Category.SubTitle = function CategoryCard({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Category.Body = function CategoryBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
Category.Item = function CategoryBody({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

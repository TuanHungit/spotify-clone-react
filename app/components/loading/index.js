import React from 'react';
import { Container, Item } from './styles/loader';
export default function Loading({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Loading.Item = function LoadingItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

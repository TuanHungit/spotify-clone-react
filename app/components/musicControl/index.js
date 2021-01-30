import React from 'react';
import { Container } from './styles/musicControl';
export default function MusicControl({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

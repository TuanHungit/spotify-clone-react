import React from 'react';
import { Container, Bounce1, Bounce3, Bounce2, Bounce4 } from './styles/loader';
export default function Loading({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Bounce1 />
      <Bounce2 />
      <Bounce3 />
      <Bounce4 />
    </Container>
  );
}

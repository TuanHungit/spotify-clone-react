import React from 'react';

import { Container } from './styles/analyzer';

export default function Analyzer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

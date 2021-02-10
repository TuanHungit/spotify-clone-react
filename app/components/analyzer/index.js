import React from 'react';

import { Container, Render } from './styles/analyzer';

export default function Analyzer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Analyzer.Render = function AnalyzerRender({ ...restProps }) {
  return <Render {...restProps} />;
};

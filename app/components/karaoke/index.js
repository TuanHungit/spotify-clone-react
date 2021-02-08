import React from 'react';
import { Container, Text } from './styles/karaoke';
export default function Karaoke({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Karaoke.Text = function KaraokeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

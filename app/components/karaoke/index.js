import React from 'react';
import { Container, Text } from './styles/karaoke';
export default function Karaoke({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Karaoke.Text = function KaraokeText({
  active = false,
  children,
  ...restProps
}) {
  return (
    <Text active={active} {...restProps}>
      {children}
    </Text>
  );
};

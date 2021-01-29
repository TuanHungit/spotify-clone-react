import React from 'react';
import { Item, Container } from './styles/LinksByComma';
export default function LinksByComma({
  children,
  artists,
  definePath,
  pathEntry,
  titleEntry,
  defineTitle,
  ...restProps
}) {
  return (
    <Container {...restProps}>
      {artists.map((el, index) => (
        <Item
          key={`${el[titleEntry]}-${index}`}
          to={(definePath && definePath(el[pathEntry])) || el[pathEntry]}
        >
          {(defineTitle && defineTitle(el[titleEntry])) || el[titleEntry]}
          {children}
        </Item>
      ))}
      {children}
    </Container>
  );
}

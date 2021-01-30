import React from 'react';
import {
  Container,
  ListItem,
  Item,
  Logo,
  Icon,
  Text,
  Title,
  Break
} from './styles/nav';
export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Nav.Item = function NavItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
Nav.ListItem = function NavListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
Nav.Logo = function NavListItem({ children, ...restProps }) {
  return <Logo {...restProps} />;
};
Nav.Icon = function NavIcon({ children, ...restProps }) {
  return <Icon {...restProps} />;
};
Nav.Text = function NavIcon({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Nav.Title = function NavTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Nav.Break = function NavBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

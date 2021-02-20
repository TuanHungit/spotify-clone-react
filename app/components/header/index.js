import React, { useState } from 'react';

import {
  Container,
  Group,
  Icon,
  ButtonLink,
  WrapperIcon
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Header.ButtonLink = function HeaderButtonLink({
  isLoginIcon = false,
  children,
  ...restProps
}) {
  return (
    <ButtonLink isLoginIcon={isLoginIcon} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.WrapperIcon = function HeaderWrapperIcon({ children, ...restProps }) {
  return <WrapperIcon {...restProps}>{children}</WrapperIcon>;
};

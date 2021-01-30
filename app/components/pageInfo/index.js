import React from 'react';
import {
  Container,
  Image,
  Content,
  Title,
  SubTitle,
  Group,
  Text,
  Wrapper,
  Icon,
  PlayIcon
} from './styles/pageInfo';
export default function PageInfo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

PageInfo.Title = function PageInfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
PageInfo.SubTitle = function PageInfoSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

PageInfo.Image = function PageInfoImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
PageInfo.Content = function PageInfoContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
PageInfo.Group = function PageInfoGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
PageInfo.Text = function PageInfoText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
PageInfo.Wrapper = function PageInfoWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
PageInfo.PlayIcon = function CardPlayIcon({ src, children, ...restProps }) {
  return (
    <PlayIcon {...restProps}>
      <Icon src={src} />
      {children}
    </PlayIcon>
  );
};
PageInfo.Icon = function CardIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

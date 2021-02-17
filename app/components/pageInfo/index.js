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
export default function PageInfo({ bg = true, children, ...restProps }) {
  return (
    <Container bg={bg} {...restProps}>
      {children}
    </Container>
  );
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
PageInfo.PlayIcon = function CardPlayIcon({
  isPlaying,
  size,
  src,
  children,
  ...restProps
}) {
  return (
    <PlayIcon {...restProps}>
      <Icon src={src} isPlaying={isPlaying} size={size} />
      {children}
    </PlayIcon>
  );
};
PageInfo.Icon = function CardIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

import React, { useState } from 'react';

import {
  Container,
  Group,
  Search,
  SearchIcon,
  SearchInput,
  ButtonLink
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive(searchActive => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        placeholder="Search for Artists, Songs, or Podcasts"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

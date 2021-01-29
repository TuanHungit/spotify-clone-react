import React, { useState } from 'react';
import { Nav } from '../components';

import logo from '../logo.svg';
import home from '../svgs/home.svg';
import search from '../svgs/search.svg';
import library from '../svgs/library.svg';
import * as ROUTES from '../contanst/routes';
export default function NavContainer() {
  const [category, setCategory] = useState('/');
  return (
    <Nav>
      <Nav.Logo src={logo} />
      <Nav.ListItem>
        <Nav.Item
          to="/"
          onClick={() => setCategory(ROUTES.HOME)}
          active={category === '/' ? true : false}
        >
          <Nav.Icon src={home} />
          <Nav.Text> Home</Nav.Text>
        </Nav.Item>
        <Nav.Item
          to="/search"
          onClick={() => setCategory(ROUTES.SEARCH)}
          active={category === '/search' ? true : false}
        >
          <Nav.Icon src={search} />
          <Nav.Text> Search</Nav.Text>
        </Nav.Item>
        <Nav.Item
          to="/library"
          onClick={() => setCategory(ROUTES.LIBRARY)}
          active={category === '/library' ? true : false}
        >
          <Nav.Icon src={library} />
          <Nav.Text> Library</Nav.Text>
        </Nav.Item>
      </Nav.ListItem>
    </Nav>
  );
}

import React, { useState } from 'react';
import { Nav } from '../components';

import logo from '../logo.svg';
import home from '../svgs/home.svg';
import search from '../svgs/search.svg';
import heart from '../svgs/heart.svg';
import library from '../svgs/library.svg';
import plus from '../svgs/plus.svg';
import * as ROUTES from '../contanst/routes';
export default function NavContainer() {
  const [category, setCategory] = useState('/');

  return (
    <Nav>
      <Nav.Logo src={logo} />
      <Nav.ListItem>
        <Nav.Item
          to={ROUTES.HOME}
          onClick={() => setCategory(ROUTES.HOME)}
          active={category === ROUTES.HOME ? true : false}
        >
          <Nav.Icon src={home} />
          <Nav.Text weight="bold"> Home</Nav.Text>
        </Nav.Item>
        <Nav.Item
          to={ROUTES.SEARCH}
          onClick={() => setCategory(ROUTES.SEARCH)}
          active={category === ROUTES.SEARCH ? true : false}
        >
          <Nav.Icon src={search} />
          <Nav.Text weight="bold"> Search</Nav.Text>
        </Nav.Item>
        <Nav.Item
          to={ROUTES.LIBRARY}
          onClick={() => setCategory(ROUTES.LIBRARY)}
          active={category === ROUTES.LIBRARY ? true : false}
        >
          <Nav.Icon src={library} />
          <Nav.Text weight="bold"> Library</Nav.Text>
        </Nav.Item>

        <Nav.Title>Playlists</Nav.Title>
        <Nav.Item
          to={ROUTES.PLAYPLIST}
          onClick={() => setCategory(ROUTES.PLAYPLIST)}
          active={category === ROUTES.PLAYPLIST ? true : false}
        >
          <Nav.Icon src={plus} background={'#b3b3b3'} size={'20px'} />
          <Nav.Text weight="bold">Create Playlist</Nav.Text>
        </Nav.Item>
        <Nav.Item
          to={ROUTES.LINKEDSONG}
          onClick={() => setCategory(ROUTES.LINKEDSONG)}
          active={category === ROUTES.LINKEDSONG ? true : false}
        >
          <Nav.Icon src={heart} size={'20px'} background={'#b3b3b3'} />
          <Nav.Text weight="bold">Liked song</Nav.Text>
        </Nav.Item>

        <Nav.Break />
        <Nav.Item>
          <Nav.Text>My Playplist #5</Nav.Text>
        </Nav.Item>
        <Nav.Item>
          <Nav.Text>My Playplist #4</Nav.Text>
        </Nav.Item>
        <Nav.Item>
          <Nav.Text>My Playplist #3</Nav.Text>
        </Nav.Item>
        <Nav.Item>
          <Nav.Text>My Playplist #2</Nav.Text>
        </Nav.Item>
        <Nav.Item>
          <Nav.Text>My Playplist #1</Nav.Text>
        </Nav.Item>
      </Nav.ListItem>
    </Nav>
  );
}

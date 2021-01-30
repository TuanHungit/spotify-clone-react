import React, { useRef, useEffect, useState } from 'react';

import { Category, Card } from '../components';
import play from '../svgs/play.svg';
const Categories = () => {
  const dataCategories = [
    {
      id: 'ZWZB96AB',
      name: 'TOP 100 KPOP',
      img:
        'https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80',
      desc: 'Lorem ipsum'
    },
    {
      id: 'ZWZB96DC',

      name: 'TOP 100 VPOP',
      img:
        'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum'
    },
    {
      id: 'ZWZB969E',
      name: 'TOP 100 US/UK',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum'
    }
  ];

  return (
    <Category>
      <Category.Item>
        <Category.Title>Top 100 bài hát nổi bật</Category.Title>
        <Category.Body>
          {dataCategories.map((el, index) => (
            <Card key={index}>
              <Card.Image src={el.img} />
              <Card.Content>
                <Card.Title>{el.name}</Card.Title>
                <Card.SubTitle>{el.desc}</Card.SubTitle>

                <Card.PlayIcon src={play} />
              </Card.Content>
            </Card>
          ))}
        </Category.Body>
      </Category.Item>
    </Category>
  );
};

export default Categories;

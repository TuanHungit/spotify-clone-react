import React, { useRef, useEffect, useState } from 'react';
import { Category, Card } from '../components';
import play from '../svgs/play.svg';
const Categories = () => {
  const dataCategories = [
    {
      id: 'ZWZB96AB',
      name: 'TOP 100 KPOP',
      slug: 'top-100-kpop',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Top 100 bài hát Hàn Quốc 2021'
    },
    {
      id: 'ZWZB969E',
      name: 'TOP 100 VPOP',
      slug: 'top-100-vpop',
      img:
        'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Top 100 bài hát Việt Nam 2021'
    },
    {
      id: 'ZWZB96DC',
      name: 'TOP 100 US/UK',
      slug: 'top-100-usuk',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Top 100 bài hát Âu Mỹ 2021'
    }
  ];

  return (
    <Category>
      <Category.Item>
        <Category.Title>Top 100 bài hát nổi bật</Category.Title>
        <Category.Body>
          {dataCategories.map((el, index) => (
            <Card
              key={index}
              to={{ pathname: `/tracks/${el.slug}`, state: { ...el } }}
            >
              <Card.Image src={el.img} />
              <Card.PlayIcon src={play} />
              <Card.Content>
                <Card.Title>{el.name}</Card.Title>
                <Card.SubTitle>{el.desc}</Card.SubTitle>
              </Card.Content>
            </Card>
          ))}
        </Category.Body>
      </Category.Item>
      <Category.Item>
        <Category.Title>Top 100 bài hát nổi bật</Category.Title>
        <Category.Body>
          {dataCategories.map((el, index) => (
            <Card key={index} to={`/tracks`} params={{ data: el }}>
              <Card.Image src={el.img} />
              <Card.PlayIcon src={play} />
              <Card.Content>
                <Card.Title>{el.name}</Card.Title>
                <Card.SubTitle>{el.desc}</Card.SubTitle>
              </Card.Content>
            </Card>
          ))}
        </Category.Body>
      </Category.Item>
    </Category>
  );
};

export default Categories;

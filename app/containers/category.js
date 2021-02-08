import React, { useRef, useEffect, useState } from 'react';
import { Category, Card } from '../components';
import play from '../svgs/play.svg';
import dataCategories from '../components/category/categoryData';

const Categories = () => {
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

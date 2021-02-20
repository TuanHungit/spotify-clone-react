import React from 'react';
import { Category, Card, LazyLoad } from '../components';
import play from '../svgs/play.svg';
import dataCategories from '../components/category/categoryData';

const Categories = () => {
  return (
    <Category>
      <Category.Item>
        <Category.Title>Top song</Category.Title>
        <Category.Body>
          {dataCategories.map((el, index) => (
            <Card
              key={index}
              to={{ pathname: `/tracks/${el.alias}`, state: { ...el } }}
            >
              <LazyLoad src={el.cover} alt="Thumbnail" size={'140'} />
              <Card.PlayIcon src={play} />
              <Card.Content>
                <Card.Title>{el.title}</Card.Title>
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

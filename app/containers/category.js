import React from 'react';
import { connect } from 'react-redux';

import { Category, Card, LazyLoad } from '../components';
import dataCategories from '../components/category/categoryData';
import * as SVG from '../svgs';

const Categories = ({ isPlaying, url, onSetPlaying }) => {
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
              <Card.PlayIcon
                src={isPlaying && url === el.alias ? SVG.pause : SVG.play}
                isPlaying={isPlaying && url === el.alias}
                onClick={() => onSetPlaying(!isPlaying)}
              />
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

const mapStateToProps = state => {
  return {
    isPlaying: state.uiState.isPlaying,
    url: state.tracksState.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetPlaying: isPlaying => dispatch(actionCreator.setPlaying(isPlaying))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

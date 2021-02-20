import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components';
import * as SVG from '../svgs';

const HeaderContainer = ({ color }) => {
  return (
    <Header>
      <Header.Group>
        <Header.WrapperIcon>
          <Header.Icon src={SVG.back} alt="BackIcon" />
        </Header.WrapperIcon>
        <Header.WrapperIcon>
          <Header.Icon src={SVG.back} alt="NextIcon" rotate />
        </Header.WrapperIcon>
      </Header.Group>
      <Header.Group>
        <Header.ButtonLink>Sign Up</Header.ButtonLink>
        <Header.ButtonLink isLoginIcon>Sign In</Header.ButtonLink>
      </Header.Group>
    </Header>
  );
};

const mapStateToProps = state => {
  return {
    color: state.uiState.color
  };
};
export default connect(mapStateToProps)(HeaderContainer);

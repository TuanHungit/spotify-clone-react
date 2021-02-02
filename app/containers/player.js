import React from 'react';
import InputRange from 'react-input-range';
import { Player, LinksByComma } from '../components';
import play from '../svgs/play.svg';
import prevStacks from '../svgs/prevStracks.svg';
import shuffleStracks from '../svgs/shuffleStracks.svg';
import repeatStracks from '../svgs/repeatStracks.svg';
import queueStracks from '../svgs/queueStracks.svg';
import lyrics from '../svgs/lyrics.svg';

export default () => {
  return (
    <Player>
      <Player.Group size="30%" justifyContent="flex-start">
        <Player.Audio />
        <Player.Image src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" />

        <Player.Title>Chúng ta của hiện tại</Player.Title>
        {/* <LinksByComma /> */}
      </Player.Group>

      <Player.Group size="40%" direction="column" justifyContent="center">
        <Player.Group size="100%" justifyContent="center">
          <Player.WrapperIcon>
            <Player.Icon src={shuffleStracks} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={prevStacks} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon background="white">
            <Player.Icon src={play} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={prevStacks} rotate={'180deg'} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={repeatStracks} opacity={0.5} />
          </Player.WrapperIcon>
        </Player.Group>
        <Player.Group size="100%" justifyContent="center">
          <Player.TimeSeek>0.00</Player.TimeSeek>
          <InputRange maxValue={100} minValue={0} value={10} />
          <Player.TimeSeek>3.45</Player.TimeSeek>
        </Player.Group>
      </Player.Group>
      <Player.Group size="30%" justifyContent="flex-end">
        <Player.WrapperIcon>
          <Player.Icon src={lyrics} />
        </Player.WrapperIcon>
        <Player.WrapperIcon>
          <Player.Icon src={queueStracks} />
        </Player.WrapperIcon>
      </Player.Group>
    </Player>
  );
};

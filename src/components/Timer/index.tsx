import React from 'react';
import { Props } from './types';
import { secondsToTime } from '../../utils/seconds-to-time';
import { TimerStyle } from './styled';

export function Timer(props: Props): JSX.Element {
  return (
    <TimerStyle>{secondsToTime(props.mainTime)}</TimerStyle>
  );
}

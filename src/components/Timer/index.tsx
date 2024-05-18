import React from 'react';
import { Props } from './types';
import { secondsToMinutes } from '../../utils/seconds-to-minutes';
import { TimerStyle } from './styled';

export function Timer(props: Props): JSX.Element {
  return <TimerStyle>{secondsToMinutes(props.mainTime)}</TimerStyle>;
}

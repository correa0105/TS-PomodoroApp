import React from 'react';
import { Props } from './types';
import { ButtonStyle } from './styled';

export function Button(props: Props): JSX.Element {
  return (
    <ButtonStyle
      onClick={props.onClick}
      className={props.className}
    >
      {props.text}
    </ButtonStyle>
  );
}

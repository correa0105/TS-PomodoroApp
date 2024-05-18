import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';
import { Button } from '../../components/Button';
import { Timer } from '../../components/Timer';
import { Props } from './types';
import { Pomodoro } from './styled';

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(
    props.pomodoroTime,
  );

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <Pomodoro>
      <h1>Você está: Produzindo</h1>
      <Timer mainTime={mainTime} />
      <Button text="Teste" />
      <Button text="Teste" />
      <Button text="Teste" />
    </Pomodoro>
  );
}

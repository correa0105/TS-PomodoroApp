import React from 'react';
import { PomodoroTimer } from './pages/PomodoroTimer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="app">
      <PomodoroTimer
        pomodoroTime={1800}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
      <GlobalStyles />
    </div>
  );
}

export default App;

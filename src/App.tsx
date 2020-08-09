import React from 'react';
import logo from './logo.svg';
import './App.css';
import TriggerEvent from './Components/TriggerEvent/TriggerEvent';

function App() {
  return (
    <div className="App">
      <TriggerEvent event="arm_blink" name="Arm"/>
      <TriggerEvent event="unarm_blink" name="Disarm" />
    </div>
  );
}

export default App;

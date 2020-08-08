import React from 'react';
import { StateMachineProvider, createStore } from "little-state-machine";

import './styles/reset.scss';
import './styles/App.css';

import DataForm from './components/DataForm'
import Chart from './components/Chart'



function App() {

  createStore({
    data: {}
  });
  
  return (
    <StateMachineProvider>
      <div className="App">
          <DataForm />
          <Chart />
      </div>
    </StateMachineProvider>
  );
}

export default App;
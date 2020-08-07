import React from 'react';
import { StateMachineProvider, createStore } from "little-state-machine";

import './styles/reset.scss';
import './styles/App.css';

import DataForm from './components/DataForm'
import DataView from './components/DataView'



function App() {

  createStore({
    data: {}
  });
  
  return (
    <StateMachineProvider>
      <div className="App">
          <DataForm />
          <DataView />
      </div>
    </StateMachineProvider>
  );
}

export default App;
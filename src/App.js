import React from 'react';
import { StateMachineProvider, createStore } from "little-state-machine";

import './styles/styles.scss';
import './styles/App.css';

import Header from './components/Header'
import DataForm from './components/DataForm'
import Chart from './components/Chart'



function App() {

  createStore({
    data: {}
  });
  
  return (
    <StateMachineProvider>
      <div className="app">
        <div className="container">
            <Header />
            <DataForm />
            <Chart />
        </div>
      </div>
    </StateMachineProvider>
  );
}

export default App;
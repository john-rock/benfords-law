import React from 'react';
import { StateMachineProvider, createStore } from "little-state-machine";

import './styles/styles.scss';
import './styles/App.css';

import Header from './components/Header'
import DataForm from './components/DataForm'
import Chart from './components/Chart'
import Info from './components/Info'
import Sources from './components/Sources'



function App() {

  createStore({
    data: {}
  });
  
  return (
    <StateMachineProvider>
      <div className="app">
      <Header />
        <div className="container">
            <Info />
            <DataForm />
            <Chart />
            <Sources />
        </div>
      </div>
    </StateMachineProvider>
  );
}

export default App;
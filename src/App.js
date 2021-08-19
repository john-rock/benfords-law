import React from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';
import SnackbarProvider from 'react-simple-snackbar';
import { Helmet } from 'react-helmet';

import './styles/styles.scss';
import './styles/App.css';

import Header from './components/Header';
import DataForm from './components/DataForm';
import Chart from './components/Chart';
import Info from './components/Info';
import Instructions from './components/Instructions';

function App() {
  createStore({
    data: {},
  });

  return (
    <>
      <Helmet>
        <script
          defer
          data-domain='benfords-law.netlify.app'
          src='https://plausible.io/js/plausible.js'
        ></script>
      </Helmet>
      <SnackbarProvider>
        <StateMachineProvider>
          <div className='app'>
            <Header />
            <Instructions />
            <div className='container'>
              <DataForm />
              <Chart />
              <Info />
            </div>
          </div>
        </StateMachineProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;

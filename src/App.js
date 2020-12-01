import React, { useEffect } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import SnackbarProvider from "react-simple-snackbar";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import "./styles/styles.scss";
import "./styles/App.css";

import Header from "./components/Header";
import DataForm from "./components/DataForm";
import Chart from "./components/Chart";
import Info from "./components/Info";
import Sources from "./components/Sources";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-175545284-1");
    ReactGA.pageview(window.location.pathname);
  }, []);

  createStore({
    data: {},
  });

  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="lt6dUNT7dUmojTc3ZQvk2XPKIn7Bj-bE0Yk21xYfspM"
        />
      </Helmet>
      <SnackbarProvider>
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
      </SnackbarProvider>
    </>
  );
}

export default App;

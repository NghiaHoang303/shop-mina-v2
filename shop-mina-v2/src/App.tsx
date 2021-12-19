import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import { css } from "@emotion/css";

const App: React.FC = () => {
  return (
    <Router>
      <Layout />

      <div
        className={css`
          z-index: 1;
        `}
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

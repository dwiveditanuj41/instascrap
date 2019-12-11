import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Website from "./Website";
import Auth from "./Auth";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Auth" component={Auth} />
          <Route path="/:user" component={Website} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

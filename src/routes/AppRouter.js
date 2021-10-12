import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./pages/About/About";

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
      <Route exact path="/nosotros" component={About} />
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;

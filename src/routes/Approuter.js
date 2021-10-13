import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact/Contact";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/contacto" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

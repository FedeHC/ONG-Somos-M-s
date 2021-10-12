import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeForm from "../features/HomeForm/HomeForm";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/backoffice/home" component={HomeForm} /> }
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

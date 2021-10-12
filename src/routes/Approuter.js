import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MemberForm from "../features/MemberForm/MemberForm";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/backoffice/home" component={MemberForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

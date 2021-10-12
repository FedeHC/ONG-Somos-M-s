import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrgForm from "../features/OrgForm/OrgForm";

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
      <Route exact path="/backoffice/organization/edit" component={OrgForm} />
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;

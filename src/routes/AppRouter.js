import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Organization from '../features/organization/Organization';

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route path="/backoffice/organization" component={Organization} />
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Donations from '../pages/donations';
import Gracias from '../pages/gracias';

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route exact path="/donar" component={Donations} /> 
        <Route exact path="/gracias" component={Gracias} /> 
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
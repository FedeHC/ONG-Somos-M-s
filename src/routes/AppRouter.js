import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormNovedades from '../features/news/FormNews/FormNovedades';

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route path="/backoffice/news" component={FormNovedades} />
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
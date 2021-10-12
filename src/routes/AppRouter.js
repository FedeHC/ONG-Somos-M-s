import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewsScreen from '../pages/NewsScreen/NewsScreen'; 
const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route exact path="/backoffice/news" component={NewsScreen} /> 
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
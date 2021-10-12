import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScreenSlidesList from '../pages/screenSlidesList';

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route exact path="/backoffice/slides" component={ScreenSlidesList} /> 
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CategoriesBackOffice from '../pages/categoriesBackOffice';

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route exact path="/backoffice/categories" component={CategoriesBackOffice} /> 
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
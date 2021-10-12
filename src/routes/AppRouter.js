import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TestimonialForm from '../features/testimonialForm/TestimonialForm';

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
        <Route exact path="backoffice/testimonials" component={TestimonialForm} /> 
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;
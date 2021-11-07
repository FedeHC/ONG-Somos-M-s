import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const Private = ({
 component: Component,
 ...rest
}) => {
 const {logged} = useSelector(state => state.auth);

  return (
    <Route {...rest}>
      {logged ? <Component /> : <Redirect to="/" />}
    </Route>
  );
}

export default Private;

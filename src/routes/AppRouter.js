import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UsersList from "../pages/UsersList/UsersList";

const AppRouter = () => {
 return (
  <Router>
  <div>
    <Switch>
      <Route exact path="/backoffice/users/create" >
        <UsersList data={[ { id: 0, name: "User1", email: "user.one@mail.com"}, { id: 1, name: "User2", email: "user.two@mail.com"} ]}/>
      </Route>
    </Switch>
  </div>
  </Router>
 );
}

export default AppRouter;

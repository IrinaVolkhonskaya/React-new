import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from './Nav';
import AdminPage from "../pages/AdminPage";
import MenuPage from "../pages/MenuPage";

const App = () => (
  <>
  <h2>Admin Page</h2>
    <Nav />
    <Switch>
      <Route path="/" exact component={AdminPage} />
      <Route path="/menu" component={MenuPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;

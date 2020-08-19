import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from "./Nav";
import AdminPage from "../pages/AdminPage";
import MenuPage from "../pages/MenuPage";
import MenuItemPage from "../pages/MenuPage";

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={AdminPage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/menu/:id" component={MenuItemPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from "./Nav";
import AdminPage from "../pages/AdminPage";
import MenuPage from "../pages/MenuPage";
import MenuItemPage from "../pages/MenuItemPage";
import AddItemPage from '../pages/AddItemPage';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={AdminPage} />
      <Route path="/menu/add" component={AddItemPage} />
      <Route path="/menu/:id" component={MenuItemPage} />
      <Route path="/menu" component={MenuPage} />
     
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;

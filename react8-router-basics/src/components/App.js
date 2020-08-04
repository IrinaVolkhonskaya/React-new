import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import AboutPage from "../pages/AboutPage";
import ArticlesPage from "../pages/ArticlesPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";

const App = () => (
  <>
    <h2>React Router Basics</h2>
    <Nav />

    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <HomePage title="Home Page" {...props} />}
      />

      <Route exact path="/articles" component={ArticlesPage} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;

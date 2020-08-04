import React from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

const AboutPage = () => <h1>About Page</h1>;
const HomePage = () => <h1>Home Page</h1>;
const ArticlesPage = () => <h1>Articles Page</h1>;
const NotFound = () => <h1>Page Not Found</h1>;

const styles = {
  activeLink: { color: "palevioletred", textDecoration: "none" },
};

const App = () => (
  <>
    <h2>React Router Basics</h2>
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={styles.activeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={styles.activeLink}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/articles" activeStyle={styles.activeLink}>
          Articles
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/about" component={AboutPage} />
      {/* <Route component={NotFound} />
       */}
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;

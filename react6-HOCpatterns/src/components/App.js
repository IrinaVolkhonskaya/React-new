import React, { Component } from "react";
import TestComponent from "./TestComponent";
// import withLog from '../enhancers/withLog';
//import withToggle from '../enhancers/withToggle';
// import withStorage from '../enhancers/withStorage';
// import { compose } from 'recompose';
import Togglable from "./Togglable";
import FetchData from "./FetchData";

// const header = css`
// text-align: center;
// `;

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Patterns</h1>
        <Togglable>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Toggle</button>
              {on && <TestComponent title="Cool title" text="Super text" />}
            </div>
          )}
        </Togglable>

        <FetchData url="https://jsonplaceholder.typicode.com/users">
          {({ results, loading, error }) => (
            <div>
              {loading && <h1>LOADING!</h1>}
              {results.length > 0 && JSON.stringify(results, null, 2)}
            </div>
          )} 
        </FetchData>
      </div>
    );
  }
}
export default App;

//библиотека Recompose уже не используется с 25.10.2018, так как появились Хуки
// export default compose(
//   withLog,
//   withStorage
// )(App);
// export default withStorage(App);
// export default withToggle(App);
// export default withLog(App);

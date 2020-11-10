import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from '../../redux/userSelectors';

//если мартшрут защищенный(приватный) и пользователь залогинен, рендерит компонент.avatar
// в противном случае рендерит Redirect на /signin

const ProtectedRoute = ({
  component: Component,
  redirectTo = '/signin',
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => //props - это пропы раута (match, location, hystory)
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapState)(ProtectedRoute);
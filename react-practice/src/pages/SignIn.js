// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as selectors from '../redux/userSelectors';
// import SignInForm from '../components/Auth/SignUpForm';


// export default class SignIn extends Component {
//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.isAuthenticated) {
//       const { from } = this.props.location.state || { from: { pathname: '/' } };

//       this.props.history.push(from);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
//           Please enter your credentials
//         </h1>
//         <SignInForm />
//       </div>
//     );
//   }
// }

// // export default connect(state => ({
// //   isAuthenticated: selectors.isAuthenticated(state)
// // }))(SignIn);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../redux/userSelectors';
import SignInForm from '../components/Auth/SignInForm';

class SignIn extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuthenticated) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };

      this.props.history.push(from);
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
      </div>
    );
  }
}

export default connect(state => ({
  isAuthenticated: selectors.isAuthenticated(state)
}))(SignIn);
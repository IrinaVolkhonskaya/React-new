// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as operations from '../../redux/authOperations';


// const INITIAL_VALUE = {
//   email: '',
//   password: '',
// };

// class SignInForm extends Component {
//   state = { ...INITIAL_VALUE };

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     console.log(this.state);

//     this.reset();
//   };

//   reset() {
//     this.setState({ ...INITIAL_VALUE });
//   }

//   render() {
//     const { email, password } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>SingIN</h2>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             placeholder="email"
//           />
//         </label>
//         <br />
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             placeholder="password"
//           />
//         </label>
//         <br />
//         <button onClick={this.handleSubmit}>Sign In</button>
//       </form>
//     );
//   }
// }

// const mapDispatch = {
//   onSubmit: operations.signIn
// };

// export default connect(
//   null,
//   mapDispatch
// )(SignInForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/authOperations';
import Form from './common/Form/Form';
import Input from './common/Input/Input';
import Label from './common/Label/Label';
import Button from './common/Button/Button';

const INITIAL_STATE = { email: '', password: '' };

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text="Email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label text="Password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Sign in" type="submit" />
      </Form>
    );
  }
}

const mapDispatch = {
  onSubmit: operations.signIn
};

export default connect(
  null,
  mapDispatch
)(SignInForm);
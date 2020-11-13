// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as operations from '../../redux/authOperations';

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   phone: '',
//   password: '',
// };

// class SignUpForm extends Component {
//   state = { ...INITIAL_STATE };

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
//     this.setState({ ...INITIAL_STATE });
//   }

//   render() {
//     const { name, email, phone, password } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>SingUP</h2>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Введите Ваше имя"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
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
//           Phone number
//           <input
//             type="tel"
//             name="phone"
//             value={phone}
//             onChange={this.handleChange}
//             placeholder="phone"
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
//         <button onClick={this.handleSubmit}>Sign Up</button>
//       </form>
//     );
//   }
// }

// const mapDispatch = {
//   onSubmit: operations.signUp
// };

// export default connect(
//   null,
//   mapDispatch
// )(SignUpForm);



// на хуках
import React, { useState, Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as operations from '../../redux/authOperations';
import Form from './common/Form/Form';
import Input from './common/Input/Input';
import Label from './common/Label/Label';
import Button from './common/Button/Button';

const INITIAL_STATE = { name: '', email: '', password: '' };

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text="Name">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>

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

        <Button label="Sign Up" type="submit" />
      </Form>
    );
  }
}

const mapDispatch = {
  onSubmit: operations.signUp,
};

export default connect(null, mapDispatch)(SignUpForm);




// export default function SignUpForm() {
//   const dispatch = useDispatch();
//   const onSignUp = () => dispatch(operations.signUp())

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChangeName = evt => {
//     setName(evt.target.value);
//   };

//   const handleChangeEmail = evt => {
//     setEmail(evt.target.value);
//   };

//   const handleChangePassword = evt => {
//     setPassword(evt.target.value);
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     onSignUp();

//     setName();
//     setEmail();
//     setPassword();
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label text="Name">
//         <Input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChangeName}
//         />
//       </Label>

//       <Label text="Email">
//         <Input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChangeEmail}
//           placeholder="example@mail.com"
//         />
//       </Label>

//       <Label text="Password">
//         <Input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChangePassword}
//         />
//       </Label>

//       <Button label="Sign Up" type="submit" />
//     </Form>
//   );
// }

// const mapDispatch = {
//   onSubmit: operations.signUp,
// };

// export default connect(null, mapDispatch)(SignUpForm);


//-----------------------------------------------------.


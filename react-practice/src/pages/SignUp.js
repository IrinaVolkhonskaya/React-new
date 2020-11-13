import React from 'react';
import SignUpForm from '../components/Auth/SignUpForm';

export default function SignUp() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
        Create your account for free
      </h1>
      <SignUpForm />
    </div>
  );
}

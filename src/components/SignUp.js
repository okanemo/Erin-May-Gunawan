import React, { useState } from 'react';
import '../css/signup.css';

function SignUp(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [signIn, setSignIn] = useState(false);

  return (
    <form className='signup' onSubmit={() => props.setSignUp(false)}>
      <h1>{signIn ? 'Sign In' : 'Sign up'}</h1>
      <label>E-mail</label>
      <input
        type='text'
        name='email'
        placeholder='Enter your e-mail'
        onChange={handleChange}
        required='required'
      />

      <label>Password</label>
      <input
        type='password'
        name='password'
        placeholder='Enter a strong password'
        onChange={handleChange}
        required='required'
      />

      <div className='confirm'>
        <button className='button red' onClick={() => props.setSignUp(false)}>
          Cancel
        </button>
        <button className='button' type='submit'>
          {signIn ? 'Login' : 'Register'}
        </button>
      </div>

      <p>
        Have an account?{' '}
        <span className='bold pointer' onClick={() => setSignIn(true)}>
          Sign In
        </span>
      </p>
    </form>
  );
}

export default SignUp;

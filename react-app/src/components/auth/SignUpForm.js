import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import aaLogo from "../../assets/aa-logo.svg";
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // console.log('')

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password,profile));
      if (data) {
        setErrors(data)
      }
    } else {

      setErrors(["Passwords must match."]);

    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateProfile = (e) => {
    setProfile(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/learn/home' />;
  }

  return (
    <form className='signUpForm' onSubmit={onSignUp}>
      <img className="app-academy-logo-signup" src={aaLogo}></img>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='signup-input'>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      
      <div className='signup-input'>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='signup-input'>
        <label>Profile</label>
        <select name='profile'onChange={updateProfile}>
          <option value="Student">Admin </option>
          <option value="Student">Student </option>           
        </select>
      </div>
      <div className='signup-input'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='signup-input'>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      
      <a onClick={onSignUp} className="button signup-btn">
          <span className="button-inner"> Sign Up</span>
          <span className="button-bg"></span>
      </a>
      
    </form>
  );
};

export default SignUpForm;

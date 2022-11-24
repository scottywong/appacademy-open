import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './LogoutButton.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
      <a onClick={onLogout} className="button green">
      <span className="button-inner"> Logout</span>
      <span className="button-bg green"></span>
      </a>)
};

export default LogoutButton;

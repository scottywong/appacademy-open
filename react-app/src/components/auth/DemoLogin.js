import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const DemoLogin = () => {
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(()=> {
    onLogin();
  },[])

  if (user) {
    return <Redirect to='/learn/home' />;
  }

  const onLogin = async () => {
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  return errors && (

    <div>
      There was an error logging in.
    </div>
 
  );
};

export default DemoLogin;

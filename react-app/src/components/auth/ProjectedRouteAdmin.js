import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouteAdmin = props => {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
       {(user.profile==='Admin')? props.children  : <p> Sorry you do not have permission to view </p>}
    </Route>
  )
};


export default ProtectedRouteAdmin;

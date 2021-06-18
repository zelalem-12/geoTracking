import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from '../../components/header';

const PrivateRoute = props => {
  let username = '';
  let password = '';
  try {
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
  } catch (err) {
    console.log('un able to read token', err);
  }
  if (!username || !password) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <Route {...props} exact render={props => <component {...props} />} />
    </>
  );
};

export default PrivateRoute;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LearnNavBar from './components/Navigation/LearnNavBar';
import LearnHomePage from './components/HomePage/LearnHomePage';
import EnrollmentHomePage from './components/HomePage/EnrollmentHomePage';
import Footer from './components/Footer';
import EnrollmentDetailPage from './components/HomePage/EnrollmentDetailPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Route path='/' exact={true}>
          <NavBar />
      </Route>
      <ProtectedRoute path='/learn'>
          <LearnNavBar/>
      </ProtectedRoute>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/learn' exact={true}>
          <Redirect to='/learn/home' />
        </ProtectedRoute>
        <ProtectedRoute path='/learn/home'>
          <LearnHomePage/>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/home'>
          <EnrollmentHomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/assignments/:assignmentId'>  
          <EnrollmentDetailPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <Route path="*">
        <main style={{ padding: "1rem" }}>
            <p>Sorry, the page couldn't be found.</p>
          </main>
        </Route>
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;

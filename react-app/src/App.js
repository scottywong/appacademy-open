import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/session';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';

import ProtectedRoute from './components/auth/ProtectedRoute';
import ProtectedRouteAdmin from './components/auth/ProjectedRouteAdmin';

import HomeNavigationBar from './components/Navigation/HomeNavigationBar';
import LearnNavBar from './components/Navigation/LearnNavBar';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile';
import Footer from './components/Footer';
import UsersList from './components/UsersList';
import User from './components/User';

import LearnHomePage from './components/HomePage/LearnHomePage';
import EnrollmentHomePage from './components/HomePage/EnrollmentHomePage';
import EnrollmentDetailPage from './components/HomePage/EnrollmentDetailPage';

import AdminDetail from './components/Admin/AdminDetail';
import CourseDetail from './components/Admin/Course/CourseDetail';
import TaskDetail from './components/Admin/Task/TaskDetail';

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
      <ProtectedRoute path='/learn'>
          <LearnNavBar/>
      </ProtectedRoute>
      <Switch>
        <Route path='/' exact={true}>
          <HomeNavigationBar/>
          <HomePage/>
        </Route>
        <Route path='/login' exact={true}>
          <HomeNavigationBar/>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <HomeNavigationBar/>
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
        <ProtectedRoute path='/learn/profile' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/home'>
          <EnrollmentHomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/assignments/:assignmentId'>  
          <EnrollmentDetailPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/admin' exact={true} >
          <ProtectedRouteAdmin>
            <AdminDetail />
          </ProtectedRouteAdmin>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/admin/courses/:courseId' exact={true} >
          <ProtectedRouteAdmin>
            <CourseDetail />
          </ProtectedRouteAdmin>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/admin/tasks/:taskId' exact={true} >
          <ProtectedRouteAdmin >
            <TaskDetail />
          </ProtectedRouteAdmin>
        </ProtectedRoute>

        <ProtectedRoute path='/' exact={true} >
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

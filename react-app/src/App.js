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

import LearnSideBar from './components/Sidebar/LearnSideBar';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    if(sidebarOpen){
      const el = document.querySelector('.sidebar-active-content')
      el?.classList.remove('sidebar-active-content')
      el?.classList.add('sidebar-inactive-content')
    } else {
      const el = document.querySelector('.sidebar-inactive-content')
      el?.classList.remove('sidebar-inactive-content')
      el?.classList.add('sidebar-active-content')
    }
  };

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
          <LearnNavBar toggleSidebar={handleViewSidebar}/>
          
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
          <LearnSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
          <LearnHomePage/>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/profile' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/home'>
          <LearnSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
          <EnrollmentHomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/assignments/:assignmentId'> 
          
            <LearnSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/> 
     
            <EnrollmentDetailPage/>

        </ProtectedRoute>
        <ProtectedRoute path='/learn/admin' exact={true} >
          <ProtectedRouteAdmin>
            <AdminDetail />
          </ProtectedRouteAdmin>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/admin/courses/:courseId' >
          <ProtectedRouteAdmin>
            <CourseDetail />
          </ProtectedRouteAdmin>
        </ProtectedRoute>
        <ProtectedRoute path='/learn/admin/tasks/:taskId' >
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

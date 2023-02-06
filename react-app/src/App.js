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
import DemoLogin from './components/auth/DemoLogin';

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
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [autoShowMenu, setAutoShowMenu] = useState(true);

  const handleSidebarOpen = () => {
        const el = document.querySelector('[class*="page-container"]')
        const el2 = document.querySelector('[class*="learnpage-title-container"]')
        const el3 = document.querySelector('[class*="LearnNavBar-container"]')
        setTimeout(function(){el?.classList.remove('sidebar-inactive-page')},1)
        el?.classList.add('sidebar-active-page')
        if(el2){
          setTimeout(function(){el2.classList.remove('sidebar-inactive-content-title')},1)
          el2.classList.add('sidebar-active-content-title')
        }
        if(el3){
          setTimeout(function(){el3.classList.remove('LearnNavBar-fullwidth')},1)
          el3.classList.add('LearnNavBar-shortwidth')
        }
  }

  const handleSidebarClosed = () => {
      const el = document.querySelector('[class*="page-container"]')
      const el2 = document.querySelector('[class*="learnpage-title-container"]')
      const el3 = document.querySelector('[class*="LearnNavBar-container"]')
      
      setTimeout(function(){el?.classList.remove('sidebar-active-page')},5)
      el?.classList.add('sidebar-inactive-page')
      if(el2){
        setTimeout(function(){el2.classList.remove('sidebar-active-content-title')},1)
        el2.classList.add('sidebar-inactive-content-title')
      }
      if(el3){
        setTimeout(function(){el3.classList.remove('LearnNavBar-shortwidth')},1)
        el3.classList.add('LearnNavBar-fullwidth')
      }
  }

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.outerWidth);

  //     if (window.matchMedia('(max-width: 768px)').matches) {
      
  //       setSideBarOpen(false);
  //       setAutoShowMenu(false);
  //       // handleSidebarClosed();

  //       const el = document.querySelector('[class*="page-container"]')
  //       const el2 = document.querySelector('[class*="learnpage-title-container"]')
  //       const el3 = document.querySelector('[class*="LearnNavBar-container"]')
        
  //       setTimeout(function(){el?.classList.remove('sidebar-active-page')},5)
  //       el?.classList.add('sidebar-inactive-page')
  //       if(el2){
  //         setTimeout(function(){el2.classList.remove('sidebar-active-content-title')},1)
  //         el2.classList.add('sidebar-inactive-content-title')
  //       }
  //       if(el3){
  //         setTimeout(function(){el3.classList.remove('LearnNavBar-shortwidth')},1)
  //         el3.classList.add('LearnNavBar-fullwidth')
        
  //       }
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [windowWidth]);

  
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    if(sidebarOpen){
      // handleSidebarOpen();
      const el = document.querySelector('[class*="page-container"]')
      const el2 = document.querySelector('[class*="learnpage-title-container"]')
      const el3 = document.querySelector('[class*="LearnNavBar-container"]')
      
      setTimeout(function(){el?.classList.remove('sidebar-active-page')},5)
      el?.classList.add('sidebar-inactive-page')
      if(el2){
        setTimeout(function(){el2.classList.remove('sidebar-active-content-title')},1)
        el2.classList.add('sidebar-inactive-content-title')
      }
      if(el3){
        setTimeout(function(){el3.classList.remove('LearnNavBar-shortwidth')},1)
        el3.classList.add('LearnNavBar-fullwidth')
      }

    } else {
      // handleSidebarClosed();
      const el = document.querySelector('[class*="page-container"]')
      const el2 = document.querySelector('[class*="learnpage-title-container"]')
      const el3 = document.querySelector('[class*="LearnNavBar-container"]')
      setTimeout(function(){el?.classList.remove('sidebar-inactive-page')},1)
      el?.classList.add('sidebar-active-page')
      if(el2){
        setTimeout(function(){el2.classList.remove('sidebar-inactive-content-title')},1)
        el2.classList.add('sidebar-active-content-title')
      }
      if(el3){
        setTimeout(function(){el3.classList.remove('LearnNavBar-fullwidth')},1)
        el3.classList.add('LearnNavBar-shortwidth')
      }
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
    <div>
      <div className="content-container">
        
      <BrowserRouter>
        <ProtectedRoute path='/learn'>
            <LearnNavBar toggleSidebar={handleViewSidebar} autoShowMenu={autoShowMenu}/> 
            {/* <LearnSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/> */}
        </ProtectedRoute>
        <ProtectedRoute path='/learn/enrollments/:enrollmentId/'>
            <div class="overlay">
              <p>Sorry, this experience is not possible below 768px.</p>
            </div>
          <LearnSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} autoShowMenu={autoShowMenu}/>
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
          <Route path='/demo-login' exact={true}>
            <HomeNavigationBar/>
            <DemoLogin />
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
              <div class="overlay">
                <p>Sorry, this experience is not possible below 768px.</p>
              </div>
            <LearnSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} autoShowMenu={autoShowMenu}/>
              <LearnHomePage/>
          </ProtectedRoute>
          <ProtectedRoute path='/learn/profile' exact={true} >
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute path='/learn/enrollments/:enrollmentId/home' exact={true}>
            <div class="overlay">
              <p>Sorry, this experience is not possible below 768px.</p>
            </div>
            <EnrollmentHomePage />
          </ProtectedRoute>
          <ProtectedRoute path='/learn/enrollments/:enrollmentId/assignments/:assignmentId'> 
              <div class="overlay">
                <p>Sorry, this experience is not possible below 768px.</p>
                </div>
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
      </BrowserRouter>
      </div>
      <Footer/>
    </div>

  );
}

export default App;

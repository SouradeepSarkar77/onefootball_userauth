import React, { useEffect } from 'react'
import { lazy,Suspense } from "react";
import { Navigate } from 'react-router-dom';
import { check_myname, check_token } from '../Redux/AuthSlice';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from '../Components/Home'
// import Register from '../Components/Register'
// import Login from '../Components/Login'
// import Header from '../ShareModule/Header'
// import Footer from '../ShareModule/Footer'


const Home = lazy(() => import('../Components/Home'));
const Register = lazy(() => import('../Components/Register'));
const Login = lazy(() => import('../Components/Login'));
const Header = lazy(() => import('../ShareModule/Header'));
const Footer = lazy(() => import('../ShareModule/Footer'));
const Teams = lazy(() => import('../Components/Teams/Teams'));
const About =lazy(() => import('../Components/About/About'));
export default function Routing() {


  const dispatch = useDispatch()
 
  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />
    },
    {
      path: "/login",
      Component: <Login />
    },
  ];

  const PrivateRouteNames = [
    {
      path: "/",
      Component: <Home />

    },
    {
      path: '/teams',
      Component: <Teams/>
    },
    {
      path: '/aboutus',
      Component: <About/>
    }
  ]
  useEffect(() => {
    dispatch(check_token())
  }, []);
  useEffect(() => {
    dispatch(check_myname())
  }, []);


 
  function PrivateRoute({ children }) {
        
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
    return token !== null && token !== undefined  ? (
      children
    ) : (
       <Navigate to="/login" />
    );
  }

  return (
    <>
    <Suspense>
      <Router>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} /> */}

          {PublicRouteNames?.map((route, index) => {
            return (
              <Route
                key={index + 1}
                exact path={route.path} element={route.Component}>
              </Route>
            );
          })}

          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                key={index + 2}
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}>
              </Route>
            );
          })}
        </Routes>
        <Footer />
      </Router>
      </Suspense>
    </>
  )
}

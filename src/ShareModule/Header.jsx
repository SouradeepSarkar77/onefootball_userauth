
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleLoggedout, handleredirectContact } from '../Redux/AuthSlice';

import './Header.css'
export default function Header() {


  const Name = localStorage.getItem("first_name");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isloggedIn } = useSelector((state) => state?.contents);


  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(Name);
  }, [Name]);

  const logout = () => {
    dispatch(handleLoggedout());
    navigate("/login");
  };
  return (

    <>

      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span><img src='images\player-with-ball.png' height={30} width={35}></img></span>

          <Link to='/' className='header_link1'>ONEFOOTBALL</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className='header_link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/aboutus' className='header_link'>AboutUs</Link>
              </li>
              <li className="nav-item">
                <Link to='/teams' className='header_link'>Teams & Stats</Link>
              </li>



            </ul>
            <span className="navbar-text">
              {isloggedIn ? (

                <>
                  <span className='header_username'>{userName}</span>

                  <span className="header_logout"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      logout();
                      dispatch(handleredirectContact());
                    }}>

                    LOGOUT
                  </span>
                </>
              ) : (
                <>
                  <Link to="/login" className='header_login'><button className='btn btn-dark' id='header-btn1'>SIGN IN</button></Link>
                  <Link to='/register' className='header_register'><button className='btn btn-primary' id='header-btn2'>SIGN UP</button></Link>
                </>

              )}
            </span>
          </div>
        </div>
      </nav>





      {/* <div>
        {isloggedIn ?(
           
            <>
            <li>{userName}</li>

                <li className="logout"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    logout();
                    dispatch(handleredirectContact());  
                  }}>
                  Logout
                </li>
            </>
          ) : (
            <Link to="/login">
              Login
            </Link>
          )}
        </div> */}


    </>
  )
}

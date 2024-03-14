import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, reset_redirectContact } from '../Redux/AuthSlice';

import './Login.css'

export default function Login() {
  const navigate = useNavigate();
  const { redirectTo, redirectContact, isinRegistration } = useSelector(
    (s) => s.contents
  );
  const [myName, setmyName] = useState("");

  const myname = localStorage.getItem("name");


  useEffect(() => {
    setmyName(myname);
  }, [myname]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const validation = () => {
    let error = {};

    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }

    return error;
  };
  console.log(error);
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Please enter your email address !" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Please enter your password !" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let data = {
      email: user.email,
      password: user.password,
    };
    dispatch(login(data));

  };


  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      isInLoginPage && navigate("/");
    }
  };



  useEffect(() => {
    RedirectUser();
  }, [redirectTo]);

  useEffect(() => {
    dispatch(reset_redirectContact(null));
  }, [redirectContact]);
  return (
    <>

      <div className='login-heading'>Sign in with your credentials to explore the OneFootball app.</div>
      <div className="card mb-3" style={{ margin: '40px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images\signinimg\bluethumb.png" class="img-fluid rounded-start" alt="..." style={{ padding: '20px' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">


              <form className='login-form'>

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    name="email"
                    value={user.email}
                    onChange={(e) => postUserData(e)} />
                  <label for="floatingInput" className='login-label'>Email address</label>
                  <span className='error-display'>{error?.email}</span>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={(e) => postUserData(e)} />
                  <label for="floatingPassword" className='login-label'>Password</label>
                  <span className='error-display'>{error?.password}</span>
                </div>



                <button className="btn btn-dark btn-lg" type="button" style={{ borderRadius: '4px', width: '100%', marginTop: '20px', fontWeight: 'bold' }}
                  onClick={Submit}>SIGN IN</button>

              </form>

            </div>
          </div>
        </div>
      </div>







      <br></br>



     
      
      
    </>
  )
}

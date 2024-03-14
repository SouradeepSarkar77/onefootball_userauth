import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { register } from '../Redux/AuthSlice';
import './Register.css'
export default function Register() {

  const { redirectContact } = useSelector((state) => state.contents);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: ""
  });
  const [error, setError] = useState({});
  const [img, setimg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "enter your fisrt name please";
    }
    if (!user.last_name) {
      error.last_name = "enter your last name please";
    }
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
    if (name === "first_name") {
      if (value.length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "Please Enter Your First Name !" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "Please Enter Your Last Name !" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Please Enter Your Email Address !" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Password Is Required !" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }

  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profile_pic", img);
    dispatch(register(formData));

  };

  const RedirectUser = () => {
    let name = localStorage.getItem('name');
    let isInRegistrationPage = window.location.pathname.toLowerCase() === "/register";

    if (name !== null && name !== undefined && name !== "") {

      isInRegistrationPage && navigate("/login");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectContact]);


  return (
    <>
      


        <div className='register-heading'>Stay updated with OneFootball. Sign Up now for exploring football news and stats everyday.</div>



        <div className="card mb-3" style={{ margin: '40px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="images\signupimg\register_png.png" class="img-fluid rounded-start" alt="..." style={{ padding: '20px' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">


                <form className='register-form'>

                  <div className="form-floating mb-3" >
                    <input type="text" className="form-control" id="floatingInput" placeholder="First Name"
                      name="first_name"
                      value={user.first_name}
                      onChange={(e) => postUserData(e)} />
                    <label for="floatingInput" className='register-label'>First Name </label>
                    <span className='error-display'>{error?.first_name}</span>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"
                      name="last_name"
                      value={user.last_name}
                      onChange={(e) => postUserData(e)} />
                    <label for="floatingInput" className='register-label'>Last Name </label>
                    <span className='error-display'>{error?.last_name}</span>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                      name="email"
                      value={user.email}
                      onChange={(e) => postUserData(e)} />
                    <label for="floatingInput" className='register-label'>Email address</label>
                    <span className='error-display'>{error?.email}</span>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={(e) => postUserData(e)} />
                    <label for="floatingPassword" className='register-label'>Password</label>
                    <span className='error-display'>{error?.password}</span>
                  </div>



                  <button className="btn btn-dark btn-lg" type="button" 
                  style={{ borderRadius: '4px', width: '100%', marginTop: '20px', fontWeight: 'bold' }}
                    onClick={Submit}>SIGN UP</button>

                </form>

              </div>
            </div>
          </div>
        </div>



    </>
  )
}

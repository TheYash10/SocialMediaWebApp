import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../api/AuthRequest";
const Auth = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);

  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPass: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // console.log(data.password === data.confirmPass);
      // console.log(data.password);
      // console.log(data);
      data.password === data.confirmPass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPass: "",
    });
  };
  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div>
        {/* <SignUp /> */}
        {/* Right Side*/}
        <div className="a-right">
          <form className="infoForm authForm" onSubmit={handleSubmit}>
            <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
            {isSignUp && (
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                />
              </div>
            )}
            <div>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={data.username}
              />
            </div>
            <div>
              <input
                type="password"
                className="infoInput"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
              {isSignUp && (
                <input
                  type="password"
                  className="infoInput"
                  placeholder="Confirm Password"
                  name="confirmPass"
                  onChange={handleChange}
                  value={data.confirmPass}
                />
              )}
            </div>
            <span
              style={{
                display: confirmPass ? "none" : "block",
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-end",
                marginRight: "5px",
              }}
            >
              * Confirm Password is not same
            </span>
            <div>
              <span
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => {
                  setIsSignUp((prev) => !prev);
                  resetForm();
                }}
              >
                {isSignUp
                  ? "Already have an account. Login!"
                  : "Don't have an account. SignUp!"}
              </span>
            </div>
            <button className="button infoButton" type="submit">
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

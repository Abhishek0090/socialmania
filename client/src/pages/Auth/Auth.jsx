import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logox.png";

// import { useDispatch } from 'react-redux';

const Auth = () => {

  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPass: "",
  };

  const [isSignUp, setIsSignUp] = useState(false);



  // const dispatch = useDispatch();

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (isSignUp) {
        data.password === data.confirmpass
          ? dispatch(signUp(data, navigate))
          : setConfirmPass(false);
      } else {
        dispatch(logIn(data, navigate));
      }
    }
  }


  const handleChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value });

  };

  //RESET FORM
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" style={{ width: "100px" }} />

        <div className="Webname">
          <h1>Social Mania</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button className="button infoButton" type="Submit">
              {isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

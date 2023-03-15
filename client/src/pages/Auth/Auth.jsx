
import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logox.png";

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="Auth">
            {/* left side */}

            <div className="a-left">
                <img src={Logo} alt="" style={{ width: '100px' }} />

                <div className="Webname">
                    <h1>Social Mania</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* right form side */}

            <div className="a-right">
                <form className="infoForm authForm" >
                    <h3>{isSignUp ? "Register" : "Login"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
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
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="password"
                            className="infoInput"
                            placeholder="Password"
                            name="password"
                        />
                        {isSignUp && (
                            <input
                                required
                                type="password"
                                className="infoInput"
                                name="confirmpass"
                                placeholder="Confirm Password"
                            />
                        )}
                    </div>

                    {/* <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}
                    >
                        *Confirm password is not same
                    </span> */}
                    <div>
                        <span
                            style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                setIsSignUp((prev) => !prev);
                            }}
                        >
                            {isSignUp
                                ? "Already have an account Login"
                                : "Don't have an account Sign up"}
                        </span>
                        <button
                            className="button infoButton"
                            type="Submit"
                        >
                            {isSignUp ? 'SignUp' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth
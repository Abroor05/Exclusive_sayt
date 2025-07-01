import React from "react";
import "./SignUp.css";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <section className="signUp-section">
        <div className="container">
          <div className="sings">
            <div className="signLeft">
              <img src="/imgs/signUp.png" alt="" />
            </div>
            <div className="signUpRight">
              <div className="title">
                <h3>Create an account</h3>
                <p>Enter your details below</p>
              </div>

              <div className="inputs">
                <span>
                  <TextField
                    className="name inputSign"
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                  />
                </span>

                <span>
                  <TextField
                    className="email inputSign"
                    id="standard-basic"
                    label="Email or Phone Number"
                    variant="standard"
                  />
                </span>

                <span>
                  <TextField
                    className="pasword inputSign"
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                  />
                </span>
              </div>

              <div className="signUpBtns">
                <div className="createAcountBtn">Create Account</div>
                <div className="withGoogleBtn">
                  {" "}
                  <FcGoogle /> Sign up with Google
                </div>
                <span className="nextLogin">
                  <p>Already have account?</p>
                  <Link to={"/login"}>Log in</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

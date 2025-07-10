import React, { useState } from "react";
import "./SignUp.css";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/baseUrl";

function SignUp() {
  const [first_name, setFirstName] = useState(null);
  const [email_or_phone, setEmailOrPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const naviget = useNavigate()

  const signUp = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: first_name,
      email_or_phone: email_or_phone,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log({ first_name, email_or_phone, password });

    fetch(`${baseUrl}/user/register/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
       if(result?.message) {
        alert(result?.message)
        naviget("/login")
       } else if (result?.email_or_phone[0]) {
        alert(result?.email_or_phone[0])
       } else if (result?.password[0]) {
        alert(result?.password[0])
       } 
      })
      .catch((error) =>{
         console.error(error)
      });
  };

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

              <form  
                onSubmit={(e)=>{
                  e.preventDefault()
                  signUp()
                }}
              action="#" className="inputs">
                <span>
                  <TextField
                    className="name inputSign"
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    onInput={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </span>

                <span>
                  <TextField
                    className="email inputSign"
                    id="standard-basic"
                    label="Email or Phone Number"
                    variant="standard"
                    onInput={(e) => {
                      setEmailOrPhone(e.target.value);
                    }}
                  />
                </span>

                <span>
                  <TextField
                    className="pasword inputSign"
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </span>
                <button className="createAcountBtn">Create Account</button>
              </form>

              <div className="signUpBtns">
                
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

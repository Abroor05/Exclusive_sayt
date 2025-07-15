import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { baseUrl } from "../../services/baseUrl";
import { getToken, setToken } from "../../services/token";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login({setUserToken}) {
  const[email_or_phone, setEmailOrPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate()

  const login = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone: email_or_phone,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(`${baseUrl}/user/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setToken(result?.access)
        setUserToken(getToken())
        navigate("/")
        toast.success("Ro'yhatdan o'tildi")
      })
      .catch((error) => {
        console.error(error);
        return [];
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
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                  
                }}
                action="#"
              >
                <span>
                  <TextField
                    onInput={(e) => {
                      setEmailOrPhone(e.target.value);
                    }}
                    className="email inputSign"
                    id="standard-basic"
                    label="Email or Phone Number"
                    variant="standard"
                  />
                </span>

                <span>
                  <TextField
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="pasword inputSign"
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                  />
                </span>

                <span className="Loginspan">
                  <button   className="loginBtns">Login</button>
                  <p> Forget Password?</p>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

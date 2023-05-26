import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  const backtoHome = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/home/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull");
      backtoHome();
    }
  };

  return (
    <div className='main-container'>
      <div className='login-wrapper'>
        <div className='main-area'>
          <h2 className='signup-heading'>
            User <span style={{ color: "#00dfc0" }}>Login</span>
          </h2>
          <hr /> <br />
          <form method='POST' autoComplete='true'>
            <label className='icon-label'>
              <i class='fa-solid fa-envelope'></i>
            </label>
            <input
              className='input-name'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email'
              type='email'
            ></input>
            <br />

            <label className='icon-label'>
              <i class='fa-solid fa-lock '></i>
            </label>
            <input
              className='input-name'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              type='password'
            ></input>
            <br />
            <input
              className='submitlogin-btn'
              type='submit'
              value='Login'
              onClick={loginUser}
            />
          </form>
        </div>
        <div className='imglogin-area'>
          <img src='https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000' alt='loginimg'></img>
        </div>
      </div>
    </div>
  );
}
export default Login;
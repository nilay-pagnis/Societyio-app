import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const backtologin = () => {
    navigate("/login");
  };

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone: "",
    societyname: "",
    address:"",
    isSocietyCreated:false,
    isuserlogin:false,
    featured:false,
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      fname,
      lname,
      username,
      email,
      phone,
      societyname,
      address,
      isSocietyCreated,
      isuserlogin,
      featured,
      password,
      cpassword,
    } = user;

    const res = await fetch("/home/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        username,
        email,
        phone,
        societyname,
        address,
        isSocietyCreated,
        isuserlogin,
        featured,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Error occured while creating account!");
    } else {
      window.alert("Account created Successfully!!");

      backtologin();
    }
  };
  return (
    <div className='main-container'>
      <div className='wrapper'>
        <div className='main-area'>
          <h2 className='signup-heading'>
            Sign <span style={{ color: "purple" }}>up</span>
          </h2>
          <hr /> <br />
          <form method='POST' className='register-form' id='registerform'>
            <label className='icon-label' htmlFor='fname'>
              <i className='fa-solid fa-user'></i>
            </label>
            <input
              className='input-name'
              name='fname'
              value={user.fname}
              id='name'
              placeholder='First Name'
              type='text'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <label className='icon-label' htmlFor='lname'></label>
            <input
              className='input-name'
              name='lname'
              value={user.lname}
              id='lname'
              placeholder='Last Name'
              type='text'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <br />
            <label className='icon-label' htmlFor='username'>
              <i class='fa-solid fa-user'></i>
            </label>
            <input
              className='input-name'
              name='username'
              value={user.username}
              id='username'
              placeholder='Username'
              type='text'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <br />
            <label className='icon-label' htmlFor='email'>
              <i class='fa-solid fa-envelope'></i>
            </label>
            <input
              className='input-name'
              name='email'
              value={user.email}
              id='email'
              placeholder='Your Email'
              type='email'
              autoComplete='off'
              onChange={handleInputs}
            ></input>{" "}
            <br />
            <label className='icon-label' htmlFor='mobileNumber'>
              <i class='fa-solid fa-phone'></i>
            </label>
            <input
              className='input-name'
              name='phone'
              value={user.phone}
              id='mobileNumber'
              placeholder='Mobile Number'
              type='text'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <br />
            <label className='icon-label' htmlFor='societyname'>
              <i class='fa-solid fa-building-user'></i>
            </label>
            <input
              className='input-name'
              name='societyname'
              value={user.societyname}
              id='societyName'
              placeholder='Society Name'
              type='text'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <br />
            <label className='icon-label' htmlFor='password'>
              <i class='fa-solid fa-lock '></i>
            </label>
            <input
              className='input-name'
              name='password'
              value={user.password}
              id='password'
              placeholder='Password'
              type='password'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <br />
            <label className='icon-label' htmlFor='cpassword'>
              <i class='fa-solid fa-lock '></i>
            </label>
            <input
              className='input-name'
              name='cpassword'
              value={user.cpassword}
              id='cpassword'
              placeholder='Confirm your Password'
              type='password'
              autoComplete='off'
              onChange={handleInputs}
            ></input>
            <br />
            <input
              className='submit-btn'
              type='submit'
              name='signup'
              id='signup'
              value='Create Account'
              onClick={postData}
            />
          </form>
        </div>
        <div className='img-area'>
          <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=2000' alt="signup"></img>
        </div>
      </div>
    </div>
  );
}

export default Signup;

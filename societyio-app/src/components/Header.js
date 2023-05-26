import "../CSS/Signup.css";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar className='navContainer'>
      <div className='logo'>
        <NavLink to='/'>
          <div className='main-heading'>Society io</div>
          <div className='sub-heading'>We make things easy for society</div>
        </NavLink>
      </div>
      <div className='loginSignup-wrapper'>
        <button className='login-btn'>
          <NavLink to='/login'>Login</NavLink>
        </button>
        <button className='signup-btn'>
          <NavLink to='/signup'>SignUp</NavLink>
        </button>
        <button className='signup-btn'>
          <NavLink to='/logout'>logout</NavLink>
        </button>
      </div>
    </Navbar>
  );
}

export default Header;

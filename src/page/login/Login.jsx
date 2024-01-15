import React from 'react'
import "./login.scss";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Login = () => {
  return (
    <div className="login_container">
       <div className="login">
           <div className="login_left">
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/login.png" alt="" className="login_img" />
           </div>
           <div className="login_right">
              <div className="login_form">
                  <h1 className="title">Welcome to Preskool</h1>
                  <p className="register_link">Need an account?<Link className='signup_link' to="/register">Sign Up</Link></p>
                  <div className="actual_form">
                      <span className="actual_form_title">Sign in</span>
                      <input  type="email" placeholder="Email" required/>
                      <input  type="password" placeholder="Password" required/>
                      <div className="checkbox">
                        <div className="check_box">
                           <input  type="checkbox"required/>
                           <span>Remember me</span>
                        </div>
                        <Link className='checkbox_link' to="#">Forgot Password?</Link>
                      </div>
                      <Link to="/" className="login_btn">login</Link>
                  </div>
              </div>
              <span className='or'>OR</span>
              <div className="login_social_media">
                  <FacebookIcon/>
                  <LinkedInIcon/>
                  <TwitterIcon/>
                  <InstagramIcon/>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Login
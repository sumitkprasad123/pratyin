import React from 'react'
import "./register.scss";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Register = () => {
  return (
    <div className="register_container">
       <div className="register">
           <div className="register_left">
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/login.png" alt="" className="login_img" />
           </div>
           <div className="register_right">
              <div className="register_form"> 
                  <div className="actual_form">
                      <span className="actual_form_title">Sign Up</span>
                      <span className="register_text">Enter details to create your account</span>
                      <input  type="email" placeholder="User name" required/>
                      <input  type="email" placeholder="Email" required/>
                      <input  type="password" placeholder="Password" required/>
                      <input  type="email" placeholder="conform password" required/>
                      <div className="checkbox">
                        {/* <div className="check_box"> */}
                           {/* <input  type="checkbox"required/> */}
                           <span className='checkbox_text'>Remember me</span>
                        {/* </div> */}
                        <Link className='checkbox_link' to="/login">Login?</Link>
                      </div>
                      <Link to="/login" className="register_btn">Register</Link>
                  </div>
              </div>
              <span className='or'>OR</span>
              <div className="register_social_media">
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

export default Register
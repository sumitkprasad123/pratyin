import React from "react";
import "./model.scss";
import { Link } from "react-router-dom";

const Model = () => {
  return (
    <div className="model_container">
      <div className="model_user_profile">
        <div className="model_user_img_box">
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/profiles/avatar-01.jpg"
            alt="pic"
            className="model_user_img"
          />
        </div>
        <div className="model_user_info">
          <span className="model_user_name">Ryan Taylor</span>
          <span className="model_user_auth">Administrater</span>
        </div>
      </div>
      <div className="model_info">
        <Link to="#" className="info">My Profile</Link>
      </div>
      <div className="model_info">
        <Link to="#" className="info">Inbox</Link>
      </div>
      <div className="model_info">
        <Link to="#" className="info">Logout</Link>
      </div>
    </div>
  );
};

export default Model;

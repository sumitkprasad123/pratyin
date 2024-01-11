import React from 'react';
import "./homepage.scss";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Main from '../../components/main/Main';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="homepage_container">
         <Sidebar/>
         <Main/>
      </div>
    </div>
  )
}

export default Homepage
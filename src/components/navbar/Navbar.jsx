import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CropFreeIcon from '@mui/icons-material/CropFree';
import "./navbar.scss";
import Model from '../nav-model/Model';
import { ToggleContext } from '../../context/ToggleContext';

const Navbar = () => {
   const [userOpen,setUserOpen] = useState(false);
   const {hideMenu,setHideMenu} = useContext(ToggleContext)

   const handleClick = () => {
      setHideMenu(!hideMenu)
   }

   console.log({"to":hideMenu})
  return (
    <div className="container">
        <div className="navbar">
            <div className="nav_left">
                <div className="hidden_menu_logo" onClick={handleClick}>
                  <MenuIcon className='hidden_menu_icon'/>
                </div>
                  <img src={hideMenu?"https://preschool.dreamstechnologies.com/template/assets/img/logo-small.png":"https://preschool.dreamstechnologies.com/template/assets/img/logo.png"} alt="logo" className="img_logo" />
                <div className="menu_logo" onClick={handleClick}>
                  <MenuIcon className='menu_icon'/>
                </div>
                <div className="search">
                    <SearchIcon className='search_icon'/>
                    <input type="text" placeholder="Search here" className='search_input'/>
                </div>
            </div>
            <div className="nav_right">
                <div className="link">
                   <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"  alt="pic" className='link_img'/>
                </div>
                <div className="link nav_notification">
                   <NotificationsNoneIcon className='link_icon'/>
                </div>
                <div className="link">
                   <CropFreeIcon className='link_icon'/>
                </div>
                <div className="user_profile" onClick={()=>setUserOpen(!userOpen)}>
                   <div className="user_img_box">
                      <img src="https://preschool.dreamstechnologies.com/template/assets/img/profiles/avatar-01.jpg" alt="pic" className="user_img" />  
                   </div>
                   <div className="user_info">
                      <span className="user_name">Ryan Taylor</span>
                      <span className="user_auth">Administrater</span>
                   </div>
                   {userOpen?<KeyboardArrowUpIcon className='drop_icon' />:
                   <KeyboardArrowDownIcon className='drop_icon' />}
                  {/* popup */}
                  {userOpen?<Model/>:null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
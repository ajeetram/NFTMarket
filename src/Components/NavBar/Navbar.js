import React, { useState, useEffect } from "react";
import "./navbar.css";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Button } from "../ComponentsImport";
import  Images  from "../Img/Image";
import { Discover, Helpcenter, Notifiations, Profile, Sidebar } from "../Import";
const Navbar = () => {
  // Usestate
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if ((btnText === "Discover")) {
      setDiscover(true);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    } else if ((btnText === "Help Center")) {
      setDiscover(false);
      setHelpCenter(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
    }
    else
    {
      setNotification(false);
    }
  }

  const openProfile=()=>
  {
    if(!profile)
    {
      setProfile(true);
      setDiscover(false);
      setHelpCenter(false);
      setNotification(false);

    }
    else{
      setProfile(false)
    }
  }


  const openSideBar= ()=>
  {
    if(!openSideMenu)
    {
      setOpenSideMenu(true);
    }
    else
    {
      setOpenSideMenu(false);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar_container">
        {/* Start left section */}
        <div className="navbar_container_left">
          <div className="logo">
            <img
              src={Images.logo}
              alt="NFT_MarketPlace"
              style={{ width: "100px", height: "100px" }}
            ></img>
          </div>
          <div className="navbar_container_left_box_input">
            <div className="navbar_container_left_box_input_box">
              <input type="text" placeholder="Search NFT"></input>
              <BsSearch onClick={()=>{}} className="search_icon"></BsSearch>
            </div>
          </div>
        </div>
        {/* End of left setion */}
        {/* ////////////////////////////////////////// */}
        {/* Start right section */}
        <div className="navbar_container_right">
          <div className="navbar_container_right_discover">
            {/* Discover Menu */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className="navbar_container_right_discover_box">
                <Discover />
              </div>
            )}
          </div>
          {/* HELP center Menu */}
          <div className="navbar_container_right_help">
            <p onClick={(e)=>openMenu(e)}>Help Center</p>
            {
              helpCenter && 
              <div className="navbar_container_right_help_box" >
              <Helpcenter />
              </div>
            }
            
          </div>
          {/* Notifications */}
          <div className="navbar_container_right_notify">
            <MdNotifications
              className="notify"
              onClick={() => openNotification()}
            />
            {notification && <Notifiations />}
          </div>
          {/* create buttton section */}
          <div className="navbar_container_right_button">
            <Button btnName="create" handleClick={()=>{}}></Button>
          </div>

          {/* USER Profile */}

          <div className="navbar_container_right_profie_box">
            <div className="navbar_container_right_profile">
              <img
                src={Images.Ajeet}
                alt="UserProfile"
                className="navbar_container_right_profile"
                style={{ width: "40px", height: "40px" }}
                onClick={()=>openProfile()}
              ></img>
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu bar for smart phone */}
          <div className="navbar_container_right_menuBtn">
          <CgMenuRight className="menuIcon" onClick={()=>openSideBar()}>

          </CgMenuRight>

          </div>
        </div>
      </div>

      {/* Sidebar component */}
      {openSideMenu && (
        <div className="SideBar">
        <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

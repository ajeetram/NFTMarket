import React, { useState } from "react";
import "./sidebar.css";
import Images from "../Img/Image";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialTwitter,
} from "react-icons/ti";
import Button from "../Button/Button";
const Sidebar = ({ setOpenSideMenu }) => {
  // ----usestate

  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //----discover navigation menu
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Settings",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  //--- help center
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className="sideBar">
      <GrClose className="sideBar_closeBtn" onClick={() => closeSideBar()} />
      <div className="sideBar_box">
        <img
          src={Images.logo}
          alt="logo"
          style={{ width: "150px", height: "150px" }}
        ></img>
        <p>
          Discover the amazing blog on all topics of NFT & your own stories and
          shre them
        </p>
        <div className="sideBar_social">
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
        </div>
      </div>
      <div className="sideBar_menu">
        <div className="sideBar_menu_box" onClick={() => openDiscoverMenu()}>
          <p>Discover</p>
          <TiArrowSortedDown />
        </div>
        {openDiscover && (
          <div className="sideBar_discover">
            {discover.map((el, i) => (
              <p key={i + 1}>
                <Link to={el.link} >{el.name}</Link>
              </p>
            ))}
          </div>
        )}
        <div>
          <div className="sideBar_menu_box" onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className="sideBar_discover">
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link to={el.link}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sideBar_button">
        <Button btnName="Create" handleClick={()=>{}}></Button>
        <Button btnName="Connect Wallet" handleClick={()=>{}}/>
      </div>
    </div>
  );
};

export default Sidebar;

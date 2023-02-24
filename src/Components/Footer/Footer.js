import React from "react";
import "./footer.css";
import Images from "../Img/Image";
import { Discover, Helpcenter } from "../Import";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaPaperPlane } from "react-icons/fa";

// import {RisSendPlaneFill} from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box_img">
          <img src={Images.logo} alt="footer logo"></img>
          <p>
            The world's fist and largest digital marketplace for collectibles
            and non-fungible tokens (NFTs). Buy, sell exclusive digital items.
          </p>
          <div className="footer_social">
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialTwitter />
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
          </div>
        </div>
        <div className="footer_box_discover">
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className="footer_box_help">
          <h3>Help Center</h3>
          <Helpcenter />
        </div>
        <div className="subscribe">
          <h3>Subscribe</h3>

          <div className="subscribe_box">
            <input type="email" placeholder="Enter your email"></input>
            <FaPaperPlane className="subscribe_box_send" />
          </div>
          <div className="subscribe_box_info">
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


import React from "react";
import "./DaysComponent.css";
import Images from "../../Img/Image";
import {MdVerified} from 'react-icons/md'

const DaysComponent = () => {
  return (
    <div className="daysComponent">
      <div className="daysComponent_box">
        <div className="daysComponent_box_img">
          <img
            src={Images.creatorbackground1}
            className="daysComponent_box_img_img"
            alt="profile background"
            style={{ width: "600px", height: "300px", objectsFit: "covers" }}
          ></img>
        </div>
        <div className="daysComponent_box_profile">
          <img
            src={Images.creatorbackground2}
            alt="profile"
            style={{ width: "200px", height: "200px", objectsFit: "covers" }}
            className="daysComponent_box_img_1"
          />
          <img
            src={Images.creatorbackground2}
            alt="profile"
            style={{ width: "200px", height: "200px", objectsFit: "covers" }}
            className="daysComponent_box_img_2"
          />
          <img
            src={Images.creatorbackground2}
            alt="profile"
            style={{ width: "200px", height: "200px", objectsFit: "covers" }}
            className="daysComponent_box_img_3"
          />
        </div>
        <div className="daysComponent_box_title">
          <h2>Amazing Collection</h2>
          <div className="daysComponent_box_title_info">
            <div className="daysComponent_box_title_info_profile">
              <img src={Images.user1} alt="profile" style={{width:"30px", height:"30px" , objectFit:"covers"}}  className="daysComponent_box_title_info_profile_img"/>
                <p>Craetor</p>
                <span>Aditya Saxena<small><MdVerified></MdVerified></small></span>
            </div>
            <div className="daysComponent_box_title_info_price">
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponent;

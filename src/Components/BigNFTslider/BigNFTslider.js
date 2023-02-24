import React, { useState, useEffect, useCallback } from "react";
import "./BigNFTslider.css";
import Images from "../Img/Image";
import { Button } from "../ComponentsImport";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

const BigNFTslider = () => {
  const [idNumber, setIdNumber] = useState(0);
  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Ajeet Verma",
      collection: "Chai Token",
      price: "0.00000064664 ETH",
      like: 243,
      image: Images.user1,
      nftImage: Images.nft_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35,
      },
    },
    {
      title: "Smart NFT",
      id: 2,
      name: "Aditya/Bahadur",
      collection: "Anime",
      price: "0.00000064664 ETH",
      like: 243,
      image: Images.user2,
      nftImage: Images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35,
      },
    },
    {
      title: "Flash NFT",
      id: 3,
      name: "Vedanshu Dewangan",
      collection: "Portfolio",
      price: "0.00000064664 ETH",
      like: 243,
      image: Images.user3,
      nftImage: Images.nft_image22,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35,
      },
    },
    {
      title: "Shadow NFT",
      id: 4,
      name: "Rahul Thakur",
      collection: "Shadowing Effects",
      price: "0.00000064664 ETH",
      like: 243,
      image: Images.user4,
      nftImage: Images.nft_image_3,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35,
      },
    },
  ];

  //   ----Increment function --//

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //---Decrement function //
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  useEffect(() => {
    inc();
  }, []);

  return (
    <div className="bigNFTSlider">
      <div className="bigNFTSlider_box">
        <div className="bigNFTSlider_box_left">
          <h2>{sliderData[idNumber].title}</h2>
          <div className="bigNFTSlider_box_left_creator">
            <div className="bigNFTSlider_box_left_creator_profile">
              <div className="bigNFTSlider_box_left_creator_profile_image">
                <img
                  src={sliderData[idNumber].image}
                  alt="profile image"
                  style={{ width: "50px", height: "50px" }}
                ></img>
                <div className="bigNFTSlider_box_left_creator_profile_info">
                  <p>Creator</p>
                  <h4>
                    {sliderData[idNumber].name}{" "}
                    <span>
                      <MdVerified />
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="bigNFTSlider_box_left_creator_collection">
              <AiFillFire className="bigNFTSlider_box_left_creator_collection_icon" />
              <div className="bigNFTSlider_box_left_creator_collection_info">
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className="bigNFTSlider_box_left_bidding">
            <div className="bigNFTSlider_box_left_bidding_box">
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$221.21</span>
              </p>
            </div>
            <p className="bigNFTSlider_box_left_bidding_box_auction">
              <MdTimer className="bigNFTSlider_box_left_bidding_box_icon"></MdTimer>
              <span>Auction ending in </span>
            </p>
            <div className="bigNFTSlider_box_left_bidding_box_timer">
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.second}</p>
                <span>Seconds</span>
              </div>
            </div>
            <div className="bigNFTSlider_box_left_button">
              <Button btnName="Place" handleClick={() => {}}></Button>
              <Button btnName="view" handleClick={() => {}}></Button>
            </div>
          </div>
          <div className="bigNFTSlider_box_left_sliderBtn">
            <TbArrowBigLeftLines
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className="bigNFTSlider_box_right">
          <div className="bigNFTSlider_box_right_box">
            <img
              src={sliderData[idNumber].nftImage}
              alt="NFT Image"
              className="bigNFTSlider_box_right_box_img"
            ></img>
            <div className="bigNFTSlider_box_right_box_like">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTslider;

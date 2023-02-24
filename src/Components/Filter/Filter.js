import React, { useState } from "react";
import "./filter.css";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [music, setMusic] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);

//Function Section

const openFilter = ()=>
{
    if(!filter)
    {
        setFilter(true);
    }
    else
    {
        setFilter(false);
    }
}

const openImage= ()=>
{
    if(!image)
    {
        setImage(true);
    }
    else
    {
        setImage(false);
    }
}
const openVideo= ()=>
{
    if(!video)
    {
        setVideo(true);
    }
    else
    {
        setVideo(false);
    }
}
const openMusic= ()=>
{
    if(!music)
    {
        setMusic(true);
    }
    else
    {
        setMusic(false);
    }
}



  return (
    <div className="filter">
      <div className="filter_box">
        <div className="filter_box_left">
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Art</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
          <button onClick={() => {}}>Musics</button>
        </div>
        <div className="filter_box_right">
          <div className="filter_box_right_box" onClick={() => openFilter()}>
            <FaFilter />
            <span>Filter</span>
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className="filter_box_items">
          <div className="filter_box_items_box">
            <div className="filter_box_items_box_item">
              <FaWallet />
              <span>0.01 ETH- 10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>
          <div className="filter_box_items_box">
            <div
              className="filter_box_items_box_item_trans"
              onClick={() => openImage()}
            >
              <FaImages />
              <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className="filter_box_items_box">
            <div
              className="filter_box_items_box_item_trans"
              onClick={() => openVideo()}
            >
              <FaVideo />
              <span>Videos</span>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className="filter_box_items_box">
            <div
              className="filter_box_items_box_item_trans"
              onClick={() => openMusic()}
            >
              <FaMusic />
              <small>Musics</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className="filter_box_items_box">
            <div
              className="filter_box_items_box_item"
              onClick={() => openMusic()}
            >
              <FaUserAlt />
              <small>Verified</small>
             <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;

import React, {useState} from 'react'
import './FollowerTabCard.css';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import Image from '../../Img/Image';

const FollowerTabCard = ({i,el}) => {

    const [following, setFollowing] = useState(true);
    
    const followMe=()=>
    {
        if(!followMe)
        {
            setFollowing(true);
        }else{
            setFollowing(false);
        }
    }

  return (
    <div className='FollowerTabCard'>
    <div className='FollowerTabCard_rank'>
      <p>
        #{i + 1} <span>🥇</span>
      </p>
    </div>

    <div className='FollowerTabCard_box'>
      <div className='FollowerTabCard_box_img'>
        <img
          className='FollowerTabCard_box_img_img'
          src={Image.creatorbackground1}
          alt="profile braground"
          width={500}
          height={300}
          objectFit="cover"
        />
      </div>

      <div className='FollowerTabCard_box_profile'>
        <img
          className='FollowerTabCard_box_profile_img'
          alt="profile picture"
          width={50}
          height={50}
          src={Image.user1}
        />
      </div>

      <div className='FollowerTabCard_box_info'>
        <div className='FollowerTabCard_box_info_name'>
          <h4>
           ABCD
            <span>
              <MdVerified />
            </span>
          </h4>
          <p>1.234 ETH</p>
        </div>

        <div className='FollowerTabCard_box_info_following'>
          {following ? (
            <a onClick={() => followMe()}>
              Follow{""}{" "}
              <span>
                <TiTick />
              </span>
            </a>
          ) : (
            <a onClick={() => followMe()}>Following</a>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

export default FollowerTabCard
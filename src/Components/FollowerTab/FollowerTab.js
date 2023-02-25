import React,{useState, useEffect} from 'react'
import {RiUserFollowFill, RiUserUnfollowFill, RiAwardLine} from 'react-icons/ri';
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';
import './FollowerTab.css'

const FollowerTab = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const TopCreator = [1,2,3,4,5,6,7,8];
    const FollowingArray = [1,2,3,4,5,6];
    const NewsArray = [1,2,3,4,5];

    const openPopular = ()=>
    {
        if(!popular)
    {
        setPopular(true);
        setFollowing(false);
        setNews(false);
    }

    }
    const openFollower = ()=>
    {
        if(!following)
    {
        setPopular(false);
        setFollowing(true);
        setNews(false);
    }

    }
    const openNews = ()=>
    {
        if(!news)
    {
        setPopular(false);
        setFollowing(false);
        setNews(true);
    }

    }
    

  return (
    <div className="followerTab">
    <div className="followerTab_title">
      <h2> Top Creators List..</h2>
      <div className='followerTab_tabs'>
        <div className='followerTab_tabs_btn'>
          <button onClick={() => openPopular()}>
            <RiUserFollowFill /> Popular
          </button>
          <button onClick={() => openFollower()}>
            <RiUserFollowFill /> Following
          </button>
          <button onClick={() => openNews()}>
            <RiAwardLine /> NoteWorthy
          </button>
        </div>
      </div>
    </div>

    {popular && (
      <div className='followerTab_box'>
        {TopCreator.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    {following && (
      <div className='followerTab_box'>
        {FollowingArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    {news && (
      <div className='followerTab_box'>
        {NewsArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    <div className='followerTab_member'>
      <div className='followerTab_member_box'>
        <a href="#">Show me more</a>
        <a href="#">Become, author</a>
      </div>
    </div>
  </div>
);
}

export default FollowerTab
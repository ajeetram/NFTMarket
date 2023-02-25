import React,{useState} from 'react'
import './collection.css'
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from 'react-icons/bs';
import DaysComponent from './DaysComponent/DaysComponent';

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const CardArray = [1,2,3,4,5,6];
    const followingArray = [1,2,3,4];
    const newsArray = [1,2,3,4,5,6];

    const openPopular = () => {
        if (!popular) {
          setPopular(true);
          setFollowing(false);
          setNews(false);
        }
      };
    
      const openFollower = () => {
        if (!following) {
          setPopular(false);
          setFollowing(true);
          setNews(false);
        }
      };
    
      const openNews = () => {
        if (!news) {
          setPopular(false);
          setFollowing(false);
          setNews(true);
        }
      };

  return (
    <div className='collection'>
        <div className='collection_title'>
            <h2>Top List Creators</h2>
            <div className='collection_collections'>
                <div className='collection_collections_btn'>
                    <button onClick={()=>openPopular()}>
                        <BsFillAlarmFill />Last 24 hours
                    </button>
                    <button onClick={()=>openFollower()}>
                        <BsCalendar3 />Last 7 days
                    </button>
                    <button onClick={()=>openNews()}>
                        <BsFillCalendarDateFill /> Last 30 days
                    </button>
                </div>
            </div>
        </div>
        {
            popular && (<div className='collection_box'>
                {
                    CardArray.map((el,i)=>(
                        
                        <DaysComponent Key={i+1} />
                    ))
                }
            </div>)
        }
       
            {following && (<div className='collection_box'>
                {
                    followingArray.map((el,i)=>(
                        <DaysComponent Key={i+1} />
                    ))
                }
            </div>)
            }
            {
            news && (<div className='collection_box'>
                {
                    newsArray.map((el,i)=>(
                        
                        <DaysComponent Key={i+1} />
                    ))
                }
            </div>)}
        
    </div>
  )
}

export default Collection
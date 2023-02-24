import React from 'react'
import './subscribe.css';
import Images from '../Img/Image';

import { FaPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className='subscribes'>
        <div className='subscribes_box'>
            <div className='subscribes_box_left'>
               <h2>Never miss a drop</h2>
               <p>
                Subscribe to our super-exclusive drop list and be the first to know 
                about upcoming drops 
               </p>
               <div className='subscribes_box_left_box'>
                 <span>01</span>
                 <small>Get more discount</small>
               </div>
               <div className='subscribes_box_left_box'>
                 <span>02</span>
                 <small>Get premium magazines</small>
               </div>
               <div className='subscribes_box_left_input'>
               <input type="email" placeholder='Enter your email'></input>
               <FaPaperPlane className='subscribes_box_left_input_icon'></FaPaperPlane>
               </div>
            </div>
            <div className='subscribes_box_right'>
              <img src={Images.update} alt="get update" style={{width:"800px", height:"600px"}}></img>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
import React from 'react'
import './service.css';
import Images from '../Img/Image';

const Service = () => {
  return (
    <div className='service'>
    <div className='service_box'>
    <div className='service_box_items'>
      <img src={Images.service1} alt="Filter And discover"></img>
      <p className='service_box_items_step'> 
      <span>Step 1</span>
      </p>
      <h3>Filter & Discover</h3>
      <p>
        Connect with wallet, discover, buy NFTs, sell your NFTs 
        and earn money
      </p>      
    </div>
    <div className='service_box_items'>
      <img src={Images.service2} alt="Filter And discover"></img>
      <p className='service_box_items_step'> 
      <span>Step 2</span>
      </p>
      <h3>Connect wallet</h3>
      <p>
        Connect with wallet, discover, buy NFTs, sell your NFTs 
        and earn money
      </p>      
    </div>
    <div className='service_box_items'>
      <img src={Images.service3} alt="Filter And discover"></img>
      <p className='service_box_items_step'> 
      <span>Step 3</span>
      </p>
      <h3>Start trading</h3>
      <p>
        Connect with wallet, discover, buy NFTs, sell your NFTs 
        and earn money
      </p>      
    </div>
    <div className='service_box_items'>
      <img src={Images.service4} alt="Filter And discover"></img>
      <p className='service_box_items_step'> 
      <span>Step 4</span>
      </p>
      <h3>Filter & Discover</h3>
      <p>
        Connect with wallet, discover, buy NFTs, sell your NFTs 
        and earn money
      </p>      
    </div>
    </div>
    </div>
  )
}

export default Service
import React from 'react'
import './HeroSection.css'
import { Button } from '../ComponentsImport';
import Images from '../Img/Image';

const HeroSecton = () => {
  return (
    <div className='heroSection'>
      <div className='heroSection_box'>
      <div className='heroSection_box_left'>
      <h1>Discover, collect, and sell NFTs</h1>
      <p>
      Discover the most outstanding NFTs in all topics 
      of life. Creative your NFTs and sell them
      </p>
      <Button btnName="Start our search"></Button>
      </div>
      <div className='heroSection_box_right'>
        <img src={Images.hero} alt="heroImg"  ></img>
      </div>
      </div>
    </div>
  )
}

export default HeroSecton;
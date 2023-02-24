import React from 'react'
import './Discover.css';
import {Link} from 'react-router-dom';
const Discover = () => {

  //______Discover Menu//
  const discover =
  [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"Author Profile",
      link:"author-profile"
    },
    {
      name:"NFT Details",
      link:"NFT-details"
    },
    {
      name:"Account Settings",
      link:"account-setting"
    },
    {
      name:"Connect Wallet",
      link:"connect-wallet"
    },
    {
      name:"Blog",
      link:"blog"
    }

  ]
  return (
    <div>
      {discover.map((el,i)=>(
        <div key={i+1} className="discover">
        <Link to ={el.link} >{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover
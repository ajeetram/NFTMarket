import React from 'react'
import './profile.css';
import Images from '../Img/Image';
import {FaUserAlt, FarRegImage, FaUserEdit, FaRegImage} from 'react-icons/fa';
import {MdHelpCenter} from 'react-icons/md';
import {TbDownloadOff, TbDownload} from 'react-icons/tb';
import {Link} from 'react-router-dom';
const profile = () => {
  return (
    <div className='profile'>
    <div className='profile_account'>
    <img src={Images.Ajeet}
    alt ="user profile"
    style={{width:"50px", height:"50px"}}
    className="profile_account_img"></img>
    <div className='profile_account_info'>
      <p>Ajeet Verma</p>
      <small>x037464855664868</small>
    </div>
    </div>
    <div className='profile_menu'>
    <div className='profile_menu_one'>
    <div className='profile_menu_one_item'>
    <FaUserAlt></FaUserAlt>
    <p>
      <Link to="/myprofile">MyProfile</Link>
    </p>

    </div>
    <div className='profile_menu_one_item'>
    <FaRegImage></FaRegImage>
    <p>
      <Link to="/my-items">My Items</Link>
    </p>

    </div>
    <div className='profile_menu_one_item'>
    <FaUserEdit></FaUserEdit>
    <p>
      <Link to="/edit-profile">Edit Profile</Link>
    </p>

    </div>
    </div>
     <div className='profile_name_two'>
      <div className='profile_menu_one_item'>
      <MdHelpCenter/>
      <p>
        <Link to='/help'>Help</Link>
      </p> 
      </div>
      <div className='profile_menu_one_item'>
      <TbDownload/>
      <p>
        <Link to='/disconnect'>Disconnect</Link>
      </p> 
      </div>
     </div>
    </div>
    </div>
  )
}

export default profile
import React from 'react'
import './Notifications.css';
import Images from '../Img/Image';
const Notofiations = () => {
  return (
<div className='notification'>
<p>Notification</p>
<div className='notification_box'>
<div className='notification_box_img'>
<img src={Images.Ajeet} alt="profile_img" style={{width:"50px", height:"50px"}}  className="notification_box_img"></img>
</div>
<div className='notification_box_info'>
<h4>Ajeet Verma</h4>
<p>Measure action your user...</p>
<small>3 minutes</small>
</div>
<span className='notificaton_box_new'></span>
</div>
</div>
  )
}

export default Notofiations
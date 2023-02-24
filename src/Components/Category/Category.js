import React from 'react'
import './category.css'
import Image from '../Img/Image'
import { BsCircleFill } from 'react-icons/bs';

const Category = () => {
    const category = [1,2,3,4,5,6];

  return (
    <div className='category_container'>
    <div className='category'>
       {
        category.map((el,i)=>(
            <div className='category_box' key={i+1}>
             <img src={Image.creatorbackground1} className="category_box_img" alt='background img' 
             style={{width:"350px" , height:"150px", objectFit:"cover"}}></img>
             <div className='category_box_title'>
                <span>
                    <BsCircleFill />
                </span>
                <div className='category_box_title_info'>
                    <h4>Entertainment</h4>
                    <small>1995 NFTs</small> 
                </div>
             </div>
            </div>  
        ))
        
       }
       </div>
    </div>
  )
}

export default Category
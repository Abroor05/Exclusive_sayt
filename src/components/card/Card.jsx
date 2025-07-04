import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card() {
  return (
    <>
    
    <div className="card">
        <div className="card-img">
           <div className="centrImg">
             <img src="/imgs/card1.png" alt="" />
              <div className="addToCard">
              <Link to={"/oneprodact"} className='add'>Add To Cart</Link>
            </div>
           </div>
            <div className="sales">
             <div className="seeLike">
               <span>
                <FaRegHeart className='like' />
               </span>
            <span><MdOutlineRemoveRedEye className='see' /></span>
             </div>
            <span className='sale'>-40%</span>
            
            </div>
           
        </div>

        <div className="card-info">
            <h4>HAVIT HV-G92 Gamepad</h4>
            <p>$120 <span><del>$160</del></span></p>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>(88)</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default Card